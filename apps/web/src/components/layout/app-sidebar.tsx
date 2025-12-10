import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import Link from 'next/link'
import Image from 'next/image'
import { NavUser } from '../nav/nav-user'
import { NavBarMain } from '../nav/nav-bar-main'
import { NavBarSecondary } from '../nav/nav-bar-secondary'

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <Link href="/" className="w-full flex items-center gap-2">
                <div className="bg-primary/80 text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Image
                    src="/logo-small-dark.svg"
                    height={18}
                    width={18}
                    alt="Malu Enxovais Logo"
                  />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Malu Enxovais</span>
                  <small>Administração</small>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="overflow-x-hidden">
        <NavBarMain />
        <NavBarSecondary />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          showName
          showIcon
          DropdownMenuContentProps={{
            side: 'bottom',
            align: 'end',
          }}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
