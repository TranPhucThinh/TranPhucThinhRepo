import JsonFormRenderer from '@/components/json-form-renderer'
import Assignments from '@/pages/assignment'
import Estimator from '@/pages/estimator'
import WorkPackage from '@/pages/estimator/work-package'
import Overview from '@/pages/overview'
import PaginateAssignment from '@/pages/paginate-assignment'
import Project from '@/pages/project'
import DetailProject from '@/pages/project/detail'
import Ticket from '@/pages/project/ticket'
import type { RoutesProps } from '@/types/utils'

export const routes: RoutesProps[] = [
  {
    path: '/',
    element: <Overview />,
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
    path: '/projects/:id/detail/:ticketId/ticket',
    element: <Ticket />,
    title: 'Ticket detail',
    fallback: <div>Đang tải trang Ticket detail...</div>
  },
  {
    path: '/assignments',
    element: <Assignments />,
    title: 'Assignments',
    fallback: <div>Đang tải trang assignments...</div>
  },
  {
    path: '/assignments/json-form',
    element: <JsonFormRenderer />,
    title: 'Json form renderer assignment',
    fallback: <div>Đang tải trang assignments...</div>
  },
  {
    path: '/assignments/paginate',
    element: <PaginateAssignment />,
    title: 'Paginate assignment',
    fallback: <div>Đang tải trang paginate...</div>
  }
]
