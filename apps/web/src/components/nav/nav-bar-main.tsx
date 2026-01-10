'use client'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar'
import { navBarMain } from '@/config/nav-bar'
import { NavCollapsible } from './nav-collapsible'
import { NavSimple } from './nav-simple'

export function NavBarMain() {
  return navBarMain && navBarMain.length
    ? navBarMain.map((navGroup) => {
      return (
        <SidebarGroup key={navGroup.title}>
          {navGroup.title && (
            <SidebarGroupLabel>{navGroup.title}</SidebarGroupLabel>
          )}
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {navGroup.items &&
                navGroup.items.length &&
                navGroup.items.map((navGroupItem) =>
                  navGroupItem?.items && navGroupItem.items.length ? (
                    <NavCollapsible
                      key={navGroupItem.title}
                      item={navGroupItem}
                    />
                  ) : (
                    <NavSimple key={navGroupItem.title} item={navGroupItem} />
                  ),
                )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      )
    })
    : null
}
