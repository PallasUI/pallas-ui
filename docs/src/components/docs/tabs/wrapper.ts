import { styled } from '@styled-system/jsx'
import * as BaseTabs from '~/components/ui/tabs'

export const Tabs = styled(BaseTabs.Root, {
  base: {
    position: 'relative',
    mt: '6',
    w: 'full',
  },
})

export const TabsList = styled(BaseTabs.TabList, {
  base: {
    w: 'full',
    justifyContent: 'flex-start',
    rounded: '0',
    borderBottom: 'base',
    bg: 'transparent',
    p: '0',
  },
})

export const TabsTrigger = styled(BaseTabs.Trigger, {
  base: {
    position: 'relative',
    h: '9',
    rounded: '0',
    borderBottom: '2px solid transparent',
    bg: 'transparent',
    px: '4',
    pb: '3',
    pt: '2',
    fontWeight: 'semibold',
    color: 'muted.foreground',
    shadow: 'none',
    transition: 'none',
    cursor: 'pointer',

    '&[data-state=active]': {
      borderBottomColor: 'primary',
      color: 'foreground',
      shadow: 'none',
    },
  },
})

export const TabsContent = styled(BaseTabs.Content, {
  base: {
    position: 'relative',

    '& h3.font-heading': {
      fontFamily: 'base',
      fontWeight: 'semibold',
    },
  },
})
