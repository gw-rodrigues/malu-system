'use client'

import { navBarMain, navBarSecondary } from '@/config/nav-bar'
import { NavItem } from '@/types'

import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useMemo } from 'react'

type BreadcrumbItem = {
  title: string
  url: string
}

function generateBreadcrumb(pathname: string) {
  const segments = pathname.split('/').filter(Boolean)
  return segments.map((segment, index) => {
    const path = `/${segments.slice(0, index + 1).join('/')}`
    return {
      title: segment.charAt(0).toUpperCase() + segment.slice(1),
      url: path,
    }
  })
}

function generateBreadcrumbFromNavItems() {
  return [...navBarMain, ...navBarSecondary].reduce((acc, category) => {
    if (!category.items) return acc
    category.items.forEach((link) => {
      const parentBreadcrumb = [{
        title: link.title,
        url: link.url,
      }];
      acc[link.url] = parentBreadcrumb

      if (!link.items) return
      link.items.forEach((sublink) => {
        acc[sublink.url] = [...parentBreadcrumb, {
          title: sublink.title,
          url: sublink.url,
        }]
      })
    })
    return acc
  }, {} as Record<string, BreadcrumbItem[]>)
}

export function useBreadcrumbs() {
  const pathname = usePathname()

  const routeMapping: Record<string, BreadcrumbItem[]> = useMemo(() => generateBreadcrumbFromNavItems(), [])
  const breadcrumbs = useMemo(() => {
    console.log(routeMapping)
    if (routeMapping[pathname]) {
      return routeMapping[pathname]
    }
    return generateBreadcrumb(pathname)
  }, [pathname, routeMapping])

  return breadcrumbs
}
