import { Outlet } from 'react-router-dom'

import { AppSidebar } from '@/components/layouts/sidebar'
import TopBreadcrumb from '@/components/layouts/top-breadcrumb'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='p-5'>
        <section className='pt-3 pb-5 border-b-1 border-secondary-gray'>
          <TopBreadcrumb />
        </section>
        <section className='min-h-[calc(100vh-94px)]'>
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}
