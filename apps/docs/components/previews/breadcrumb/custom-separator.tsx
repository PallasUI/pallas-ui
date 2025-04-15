import Breadcrumb from '@/components/ui/breadcrumb'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function BreadcrumbCustomSeparatorPreview() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link asChild>
            <Link href="#">Home</Link>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <ArrowRight size={14} />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link asChild>
            <Link href="#">Components</Link>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator>
          <ArrowRight size={14} />
        </Breadcrumb.Separator>
        <Breadcrumb.Item>
          <Breadcrumb.Link>Breadcrumb</Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
