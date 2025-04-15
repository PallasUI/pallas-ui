import Breadcrumb from '@/components/ui/breadcrumb'
import { ChevronRight, Home, Package } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BreadcrumbWithIconsPreview() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link asChild>
            <Link href="#" className="flex items-center gap-1">
              <Home size={16} />
              Home
            </Link>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link asChild>
            <Link href="#" className="flex items-center gap-1">
              <Package size={16} />
              Components
            </Link>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link>Breadcrumb</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
