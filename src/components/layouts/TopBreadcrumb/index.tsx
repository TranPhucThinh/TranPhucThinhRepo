import { useLocation } from 'react-router-dom'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { routes } from '@/routes/menu'
import type { RoutesProps } from '@/types/utils'

const TopBreadcrumb = () => {
  const location = useLocation()

  // Tạo route map và patterns cho dynamic routes
  const createRouteMap = (routes: RoutesProps[]) => {
    const map: Record<string, RoutesProps & { titles: string[]; paths: string[] }> = {}
    const patterns: Array<{
      pattern: string
      titles: string[]
      paths: string[]
      regex: RegExp
    }> = []

    routes.forEach((route) => {
      const fullPath = route.path
      const titles = route.title ? [route.title] : []
      const paths = route.title ? [fullPath] : []

      if (fullPath.includes(':')) {
        // dynamic router, thêm vào patterns
        patterns.push({
          pattern: fullPath,
          titles,
          paths,
          regex: new RegExp(`^${fullPath.replace(/:([^/]+)/g, '([^/]+)')}$`)
        })
      } else {
        // static router, thêm vào map
        map[fullPath] = { ...route, titles, paths }
      }

      if (route.title) {
        const pathSegments = fullPath.split('/').filter(Boolean)
        let accumulatedPath = ''
        const collectedTitles: string[] = []
        const collectedPaths: string[] = []

        pathSegments.forEach((seg) => {
          accumulatedPath += `/${seg}`
          const matchedRoute = routes.find((r) => r.path === accumulatedPath && r.title)
          if (matchedRoute) {
            collectedTitles.push(matchedRoute.title!)
            collectedPaths.push(accumulatedPath)
          }
        })

        if (fullPath.includes(':')) {
          const patternObj = patterns.find((p) => p.pattern === fullPath)
          if (patternObj) {
            patternObj.titles = collectedTitles
            patternObj.paths = collectedPaths
          }
        } else {
          map[fullPath].titles = collectedTitles
          map[fullPath].paths = collectedPaths
        }
      }
    })

    return { map, patterns }
  }

  const { map: routeMap, patterns: routePatterns } = createRouteMap(routes)

  // Tạo breadcrumb items từ current path
  const createBreadcrumbItems = () => {
    const currentPath = location.pathname

    // Thử tìm exact match trước
    if (routeMap[currentPath]) {
      return routeMap[currentPath].titles.map((title, index, arr) => ({
        title,
        path: routeMap[currentPath].paths[index],
        isActive: index === arr.length - 1
      }))
    }

    // Tìm matching pattern
    for (const routePattern of routePatterns) {
      if (routePattern.regex.test(currentPath)) {
        const match = currentPath.match(routePattern.regex)
        const paths = routePattern.paths.map((path) => {
          if (!path.includes(':')) return path
          let result = path
          const paramMatches = path.match(/:([^/]+)/g) || []
          paramMatches.forEach((param, i) => {
            result = result.replace(param, match![i + 1] || '')
          })
          return result
        })
        return routePattern.titles.map((title, index, arr) => ({
          title,
          path: paths[index] || currentPath,
          isActive: index === arr.length - 1
        }))
      }
    }

    // Fallback: tạo từ URL segments
    const pathSegments = currentPath.split('/').filter(Boolean)
    const breadcrumbItems: Array<{
      title: string
      path: string
      isActive: boolean
    }> = []

    // Xây dựng breadcrumb từ path segments
    let cumulativePath = ''
    pathSegments.forEach((segment, index) => {
      cumulativePath += `/${segment}`

      // Bỏ qua segments là số (IDs)
      if (!/^\d+$/.test(segment)) {
        const route = routeMap[cumulativePath]

        const title =
          route?.title ||
          segment
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')

        breadcrumbItems.push({
          title,
          path: cumulativePath,
          isActive: index === pathSegments.length - 1
        })
      }
    })

    return breadcrumbItems
  }

  const breadcrumbItems = createBreadcrumbItems()

  if (breadcrumbItems.length <= 1) {
    return null
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => (
          <div key={`${item.path}-${index}`} className='flex items-center'>
            <BreadcrumbItem>
              {item.isActive ? (
                <BreadcrumbPage className='text-primary-blue'>{item.title}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={item.path}>{item.title}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default TopBreadcrumb
