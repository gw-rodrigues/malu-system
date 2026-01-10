'use client'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useBreadcrumbs } from '@/hooks/use-breadcrumbs'
import { IconSlash } from '@tabler/icons-react'
import { Fragment } from 'react'

export function Breadcrumbs() {
  const items = useBreadcrumbs()
  if (items.length === 0) return null

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={item.title}>
            <BreadcrumbSeparator className="hidden md:block">
              <IconSlash />
            </BreadcrumbSeparator>

            {index === items.length - 1 ? <BreadcrumbPage>{item.title}</BreadcrumbPage> : <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={item.url}>{item.title}</BreadcrumbLink>
            </BreadcrumbItem>}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
