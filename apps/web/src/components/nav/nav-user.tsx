'use client'

import {
  IconCircleCheck,
  IconBell,
  IconChevronsDown,
  IconCreditCard,
  IconLogout,
  IconSparkles,
} from '@tabler/icons-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { recentSalesData } from '@/constants/data'
import { useSignOut } from '@/hooks/api/auth'

interface NavUserProps {
  showAvatar?: boolean
  showName?: boolean
  showEmail?: boolean
  showIcon?: boolean
  showAvatarMenu?: boolean
  showNameMenu?: boolean
  showEmailMenu?: boolean
  DropdownMenuContentProps?: React.ComponentProps<typeof DropdownMenuContent>
}

interface DropdownUserContentProps {
  showAvatar?: boolean
  showName?: boolean
  showEmail?: boolean
  showIcon?: boolean
}

function DropdownUserContent({
  showAvatar = true,
  showName = false,
  showEmail = false,
  showIcon = false,
}: DropdownUserContentProps) {
  const user = recentSalesData[0]
  return (
    <>
      {showAvatar && (
        <Avatar className="h-8 w-8 rounded-lg">
          <AvatarImage src={user?.image} alt={user?.name} />
          <AvatarFallback className="rounded-lg">
            {user?.initials}
          </AvatarFallback>
        </Avatar>
      )}

      {!showName && !showEmail ? null : (
        <div className="grid flex-1 text-left text-sm leading-tight">
          {showName && (
            <span className="truncate font-semibold">{user?.name}</span>
          )}
          {showEmail && <span className="truncate text-xs">{user?.email}</span>}
        </div>
      )}

      {showIcon && <IconChevronsDown className="ml-auto size-4" />}
    </>
  )
}

export function NavUser({
  showAvatar = true,
  showName = false,
  showEmail = false,
  showIcon = false,
  showAvatarMenu = true,
  showNameMenu = true,
  showEmailMenu = true,
  DropdownMenuContentProps,
}: NavUserProps) {
  const { isMobile } = useSidebar()
  const router = useRouter()
  const signOut = useSignOut()

  async function handleSignOut() {
    await signOut.mutateAsync()
    router.push('/auth/login')
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <DropdownUserContent
                showAvatar={showAvatar}
                showName={showName}
                showEmail={showEmail}
                showIcon={showIcon}
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            {...DropdownMenuContentProps}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <DropdownUserContent
                  showAvatar={showAvatarMenu}
                  showName={showNameMenu}
                  showEmail={showEmailMenu}
                  showIcon={false}
                />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconSparkles className="mr-2 h-4 w-4" />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <IconCircleCheck className="mr-2 h-4 w-4" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconCreditCard className="mr-2 h-4 w-4" />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <IconBell className="mr-2 h-4 w-4" />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <IconLogout className="mr-2 h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
