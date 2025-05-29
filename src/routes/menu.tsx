import type { RoutesProps } from '@/types/utils'

export const routes: RoutesProps[] = [
  {
    path: '/overview',
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
    element: <div>Estimator</div>,
    title: 'Estimator',
    fallback: <div>Đang tải trang estimator...</div>
  },
  {
    path: '/projects',
    element: <div>Projects</div>,
    title: 'Projects',
    fallback: <div>Đang tải trang projects...</div>,
    children: [
      {
        path: 'projects-children',
        element: <div>Projects children</div>,
        title: 'Projects children',
        fallback: <div>Đang tải trang Projects children...</div>
      },
      {
        path: ':id/detail',
        element: <div>Projects detail</div>,
        title: 'Projects detail',
        fallback: <div>Đang tải trang Projects detail...</div>
      }
    ]
  }
]
