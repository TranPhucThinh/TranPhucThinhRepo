import type { LucideIcon } from 'lucide-react'
import type React from 'react'

export type RoutesProps = {
  path: string
  element: React.ReactNode
  fallback?: React.ReactNode
  children?: RoutesProps[]
  label?: string
  icon?: React.ReactNode
  title?: string
}

export type MenuProps = {
  title: string
  path: string
  icon?: LucideIcon
  isActive?: boolean
  children?: {
    title: string
    ath: string
    icon?: LucideIcon
  }
}
