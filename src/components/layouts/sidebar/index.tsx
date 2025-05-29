import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar'
import { Footer } from './footer'
import { Header } from './header'
import { NavMain } from './nav-main'

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className='max-w-60' collapsible='icon' {...props}>
      <SidebarHeader className='p-0'>
        <Header />
      </SidebarHeader>
      <SidebarContent className='mt-10'>
        <NavMain />
      </SidebarContent>
      <SidebarFooter className='p-0'>
        <Footer />
      </SidebarFooter>
    </Sidebar>
  )
}
