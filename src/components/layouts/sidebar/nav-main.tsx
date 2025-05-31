import { Link, useLocation } from 'react-router-dom'

import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { MENU } from './menu'

export const NavMain = () => {
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (itemPath: string) => {
    if (itemPath === '/') {
      return currentPath === '/'
    }

    return currentPath.startsWith(itemPath)
  }

  return (
    <SidebarGroup className='p-4 pt-0'>
      <SidebarMenu>
        {MENU.map((item) => (
          <SidebarMenuItem key={item.title} className='rounded-sm overflow-hidden'>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              className={cn(
                'h-9 rounded-none hover:bg-[#D3D3D3]',
                isActive(item.path) ? 'bg-[#D3D3D3] [&>svg]:text-primary-blue [&>span]:text-primary-blue' : ''
              )}
            >
              <Link
                to={item.path}
                className={cn(
                  'flex items-center gap-6 w-full',
                  'hover:[&>svg]:text-primary-blue hover:[&>span]:text-primary-blue'
                )}
              >
                {item.icon && <item.icon className='text-primary-gray' />}
                <span className='line-clamp-1 text-primary-gray font-medium text-base'>{item.title}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
