'use client'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar'
import { navBarSecondary } from '@/config/nav-bar'
import { NavCollapsible } from './nav-collapsible'
import { NavSimple } from './nav-simple'

export function NavBarSecondary() {
  return (
    <SidebarGroup key={navBarSecondary.title} className="mt-auto">
      {navBarSecondary.title && (
        <SidebarGroupLabel>{navBarSecondary.title}</SidebarGroupLabel>
      )}
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {navBarSecondary.items &&
            navBarSecondary.items.length &&
            navBarSecondary.items.map((navGroupItem) =>
              navGroupItem?.items && navGroupItem.items.length ? (
                <NavCollapsible key={navGroupItem.title} item={navGroupItem} />
              ) : (
                <NavSimple key={navGroupItem.title} item={navGroupItem} />
              ),
            )}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
