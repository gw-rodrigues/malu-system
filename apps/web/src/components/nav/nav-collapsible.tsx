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
import { useState } from 'react'

interface NavCollapsibleProps {
  item: NavItem
}

export function NavCollapsible({ item }: NavCollapsibleProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  return (
    <Collapsible
      key={item.title}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SidebarMenuItem key={item.title}>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton
            tooltip={item.title}
            isActive={pathname === item.url}
          >
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <IconChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
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
                  <Link href={subItem.url} title={subItem.title}>
                    <span>{subItem.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible >
  )
}
