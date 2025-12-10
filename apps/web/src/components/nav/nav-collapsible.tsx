'use client'
import { IconChevronRight } from '@tabler/icons-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { NavItem } from '@/types'

interface NavCollapsibleProps {
  item: NavItem
}

export function NavCollapsible({ item }: NavCollapsibleProps) {
  const pathname = usePathname()
  return (
    <Collapsible
      key={item.title}
      asChild
      open={pathname.startsWith(item.url)}
      defaultOpen={item.isActive}
      className="group/collapsible"
    >
      <SidebarMenuItem key={item.title}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={pathname === item.url}
            asChild
          >
            <Link href={item.url} ref={null}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              <IconChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </Link>
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((subItem) => (
              <SidebarMenuSubItem key={subItem.title}>
                <SidebarMenuSubButton
                  asChild
                  isActive={pathname === subItem.url}
                >
                  <Link href={subItem.url}>
                    {/* {subItem.icon && <subItem.icon />} */}
                    <span>{subItem.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}
