'use client'
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { NavItem } from '@/types'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface NavSimpleProps {
  item: NavItem
}

export function NavSimple({ item }: NavSimpleProps) {
  const pathname = usePathname()
  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton
        asChild
        tooltip={item.title}
        isActive={pathname === item.url}
      >
        <Link href={item.url} title={item.title}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
