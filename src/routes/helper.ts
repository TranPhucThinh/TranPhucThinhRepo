import type { RoutesProps } from '@/types/utils'
import wrapWithSuspense from '@/utils/wrapWithSuspense'

export const convertRoutes = (routes: RoutesProps[]): RoutesProps[] => {
  return routes.map((item) => {
    const route: RoutesProps = {
      path: item.path,
      element: wrapWithSuspense(item.element, item.fallback)
    }

    if (item.children) {
      route.children = convertRoutes(item.children)
    }

    return route
  })
}
