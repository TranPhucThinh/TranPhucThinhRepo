import { Outlet } from 'react-router-dom'

import { AppSidebar } from '@/components/layouts/sidebar'
import TopBreadcrumb from '@/components/layouts/TopBreadcrumb'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export default function AdminLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className='pt-5 pb-5'>
        <section className='pt-3 pb-5 border-b-1 border-gray-200'>
          <TopBreadcrumb />
        </section>
        <section>
          <Outlet />
        </section>
      </SidebarInset>
    </SidebarProvider>
  )
}
