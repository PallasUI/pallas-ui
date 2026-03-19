import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'
import * as React from 'react'

interface BreadcrumbContextValue {
  separator?: React.ReactNode
}

const BreadcrumbContext = React.createContext<BreadcrumbContextValue>({})

interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {
  separator?: React.ReactNode
}

const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ separator, children, ...props }, ref) => {
    const value = React.useMemo(() => ({ separator }), [separator])

    return (
      <BreadcrumbContext.Provider value={value}>
        <nav ref={ref} aria-label="breadcrumb" {...props}>
          {children}
        </nav>
      </BreadcrumbContext.Provider>
    )
  },
)
Breadcrumb.displayName = 'Breadcrumb'

const useBreadcrumb = () => {
  const context = React.useContext(BreadcrumbContext)
  if (!context) {
    throw new Error('useBreadcrumb must be used within a Breadcrumb.Root')
  }
  return context
}

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  (props, ref) => <ol ref={ref} {...props} />,
)
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  (props, ref) => <li ref={ref} {...props} />,
)
BreadcrumbItem.displayName = 'BreadcrumbItem'

interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  asChild?: boolean
}

const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, BreadcrumbLinkProps>(
  ({ asChild, ...props }, ref) => {
    const Component = asChild ? Slot : ('a' as const)
    return <Component ref={ref} {...props} />
  },
)
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
  (props, ref) => <span ref={ref} aria-current="page" {...props} />,
)
BreadcrumbPage.displayName = 'BreadcrumbPage'

const BreadcrumbSeparator = ({ children, ...props }: React.ComponentProps<'span'>) => {
  const { separator } = useBreadcrumb()

  return (
    <span role="presentation" aria-hidden="true" {...props}>
      {children ?? separator ?? <ChevronRight size={12} className="breadcrumb__sperator_icon" />}
    </span>
  )
}
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'

const BreadcrumbEllipsis = ({ ...props }: React.ComponentProps<'span'>) => (
  <span role="presentation" aria-hidden="true" {...props}>
    <MoreHorizontal className="breadcrumb__sperator_icon" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis'

// Create shorter aliases
const Root = Breadcrumb
const List = BreadcrumbList
const Item = BreadcrumbItem
const Link = BreadcrumbLink
const Page = BreadcrumbPage
const Separator = BreadcrumbSeparator
const Ellipsis = BreadcrumbEllipsis

export {
  // Types
  type BreadcrumbContextValue,
  type BreadcrumbProps,
  type BreadcrumbLinkProps,
  // Components
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
  // Short names
  Root,
  List,
  Item,
  Link,
  Page,
  Separator,
  Ellipsis,
  // Hooks
  useBreadcrumb,
}
