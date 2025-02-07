'use client'

import { css } from '@styled-system/css'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { Icons } from '~/components/docs/icons'
import { SidebarNav } from '~/components/docs/sidebar-nav'
import { Button } from '~/components/ui/button'

export const MobileSidebarToggle = () => {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  return null
  // <Sheet open={open} onOpenChange={setOpen}>
  //   <SheetTrigger asChild>
  //     <Button
  //       className={css({
  //         w: '9',
  //         h: '9',
  //         px: '0',
  //         display: 'flex',
  //         md: {
  //           display: 'none',
  //         },
  //       })}
  //     >
  //       <MenuIcon className={css({ w: '4', h: '4' })} />
  //     </Button>
  //   </SheetTrigger>
  //   <SheetContent className={css({ w: '64', px: '4', py: '6' })}>
  //     <SheetHeader>
  //       <SheetTitle>
  //         <Link
  //           href="/"
  //           onClick={() => {
  //             router.push('/')
  //             setOpen(false)
  //           }}
  //         >
  //           {/* <Icons.logoWithText className={css({ h: '6' })} /> */}
  //           <span className={css({ srOnly: true })}>Shadow Panda</span>
  //         </Link>
  //       </SheetTitle>
  //     </SheetHeader>

  //     <div
  //       className={css({
  //         h: 'full',
  //         py: '8',
  //         pr: '2.5',
  //         overflow: 'auto',
  //         '&::-webkit-scrollbar': {
  //           display: 'none',
  //         },
  //       })}
  //     >
  //       <div>
  //         <SidebarNav
  //           onNavigate={(url) => {
  //             router.push(url)
  //             setOpen(false)
  //           }}
  //         />
  //       </div>
  //     </div>
  //   </SheetContent>
  // </Sheet>
}
