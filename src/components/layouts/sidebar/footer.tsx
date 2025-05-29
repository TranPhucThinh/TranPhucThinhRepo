import { Link, useLocation } from 'react-router-dom'
import { SquareArrowOutUpRight } from 'lucide-react'

import logoRfx from '@/assets/images/logo-rfx.png'
import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import { MENU_FOOTER } from './menu'

export const Footer = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <SidebarGroup className='p-0'>
      <SidebarMenu className='pl-4 pr-4'>
        {MENU_FOOTER.map((item) => (
          <SidebarMenuItem key={item.title} className='rounded-sm overflow-hidden'>
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              className={cn(
                'h-9 rounded-none hover:bg-[#D3D3D3]',
                item.path === currentPath ? 'bg-[#D3D3D3] [&>svg]:text-primary-blue [&>span]:text-primary-blue' : ''
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
      <div className='flex items-center justify-between mt-5 pl-[30px] pr-[30px] pb-7'>
        <img src={logoRfx} alt='logo rfx' />
        <SquareArrowOutUpRight className='text-primary-blue' size={18} />
      </div>
    </SidebarGroup>
  )
}
