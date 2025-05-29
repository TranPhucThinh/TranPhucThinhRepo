import { useRoutes } from 'react-router-dom'
import { convertRoutes } from './helper'
import { routes } from './menu'
import AdminLayout from '@/layouts/Admin'

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      element: <AdminLayout />,
      children: convertRoutes(routes)
    }
  ])

  return routeElements
}

export default useRouteElements
