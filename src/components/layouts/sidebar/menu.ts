import {
  BookOpenText,
  Building2,
  Calculator,
  CalendarCheck,
  CircleHelp,
  LayoutDashboard,
  SquarePen
} from 'lucide-react'

import type { MenuProps } from '@/types/utils'

export const MENU: MenuProps[] = [
  {
    title: 'Overview',
    path: '/',
    icon: LayoutDashboard
  },
  {
    title: 'Inquiries',
    path: '/inquiries',
    icon: CircleHelp
  },
  {
    title: 'Estimator',
    path: '/estimator',
    icon: Calculator
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: SquarePen
  },
  {
    title: 'Assignments',
    path: '/assignments',
    icon: CalendarCheck
  }
]

export const MENU_FOOTER: MenuProps[] = [
  {
    title: 'Administrations',
    path: '/administrations',
    icon: Building2
  },
  {
    title: 'Documentation',
    path: '/documentation',
    icon: BookOpenText
  }
]
