'use client'

import { navBarMain, navBarSecondary } from '@/config/nav-bar'
import { NavItem } from '@/types'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

type BreadcrumbItem = {
  title: string
  link: string
}

// This allows to add custom title as well
const routeMapping: Record<string, BreadcrumbItem[]> = {}

const routeDynamicMapping = (navGroup: NavItem[], pathname: string) => {
  if (!routeMapping[pathname]) {
    routeMapping[pathname] = []
  }

  navGroup.forEach((navItem) => {
    routeMapping[pathname]?.push({ title: navItem.title, link: navItem.url })

    if (!navItem?.items || navItem.items.length <= 0) {
      return
    }

    routeDynamicMapping(navItem.items, navItem.url)
  })
}

export function useBreadcrumbs() {
  const pathname = usePathname()

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname]
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split('/').filter(Boolean)
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join('/')}`
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path,
      }
    })
  }, [pathname])

  console.log(breadcrumbs)

  return breadcrumbs
}
