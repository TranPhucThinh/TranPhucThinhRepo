import Estimator from '@/pages/estimator'
import WorkPackage from '@/pages/estimator/work-package'
import Project from '@/pages/project'
import DetailProject from '@/pages/project/detail'
import Ticket from '@/pages/project/ticket'
import type { RoutesProps } from '@/types/utils'

export const routes: RoutesProps[] = [
  {
    path: '/',
    element: <div>Overview</div>,
    title: 'Overview',
    fallback: <div>Đang tải trang chủ...</div>
  },
  {
    path: '/inquiries',
    element: <div>Inquiries</div>,
    title: 'Inquiries',
    fallback: <div>Đang tải trang inquiries...</div>
  },
  {
    path: '/estimator',
    element: <Estimator />,
    title: 'Estimator',
    fallback: <div>Đang tải trang estimator...</div>
  },
  {
    path: '/estimator/work-packages',
    element: <WorkPackage />,
    title: 'Work Packages',
    fallback: <div>Đang tải trang estimator...</div>
  },
  {
    path: '/projects',
    element: <Project />,
    title: 'Projects',
    fallback: <div>Đang tải trang projects...</div>
  },
  {
    path: '/projects/:id/detail',
    element: <DetailProject />,
    title: 'Projects detail',
    fallback: <div>Đang tải trang Projects detail...</div>
  },
  {
    path: '/projects/:id/:ticketId/detail',
    element: <Ticket />,
    title: 'Ticket detail',
    fallback: <div>Đang tải trang Ticket detail...</div>
  }
]
