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

export type JsonSchema = {
  type: string
  title?: string
  properties: Record<string, JsonSchemaProperty>
  required?: string[]
}

export type FormData = {
  [key: string]: string | number | boolean
}

export type JsonSchemaProperty = {
  type: string
  title: string
  description?: string
  enum?: string[]
  required?: string[]
}

export type FormFieldProps = {
  field: JsonSchemaProperty
  value: string | number | boolean
  onChange: (value: string | number | boolean) => void
}

export type AddressInputProps = {
  value: string
  label: string
  onChange: (value: string) => void
}

export type FormState = {
  data: FormData
  schema: string
}

export type BreadcrumbItem = {
  title: string
  path?: string
  isActive?: boolean
}

export type BreadcrumbState = {
  dynamicItems: Record<string, string>
}
