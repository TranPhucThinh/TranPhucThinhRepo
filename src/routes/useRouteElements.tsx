import { useRoutes } from 'react-router-dom'

import AdminLayout from '@/layouts/Admin'
import UserManagement from '@/pages/user-management'
import { convertRoutes } from './helper'
import { routes } from './menu'

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      element: <AdminLayout />,
      children: convertRoutes(routes)
    },
    {
      path: '/user-management',
      element: <UserManagement />
    }
  ])

  return routeElements
}

export default useRouteElements
