import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, useSidebar } from '@/components/ui/sidebar'
import { Footer } from './footer'
import { Header } from './header'
import { NavMain } from './nav-main'

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { open } = useSidebar()

  return (
    <Sidebar collapsible='icon' {...props}>
      {open && (
        <SidebarHeader className='p-0'>
          <Header />
        </SidebarHeader>
      )}
      <SidebarContent className='mt-10'>
        <NavMain />
      </SidebarContent>
      <SidebarFooter className='p-0'>
        <Footer open={open} />
      </SidebarFooter>
    </Sidebar>
  )
}
