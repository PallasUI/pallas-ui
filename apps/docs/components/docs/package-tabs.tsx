'use client'

import { docTabs } from '@/components/common/recipes/doc-tabs'
import ScrollArea from '@/components/ui/scroll-area'
import { css } from '@styled-system/css'
import React from 'react'
import { Content, Root, TabList, Trigger } from '../ui/tabs'
import { CopyButton } from './copy-button'

interface PackageTabsProps {
  npm: string
  yarn: string
  pnpm: string
}

const TabContent = ({ value }: { value: string }) => (
  <ScrollArea.Root
    className={css({
      bg: '#1E1E1E',
      rounded: 'md',
      border: '1px solid',
      borderColor: 'border',
      _after: {
        content: '""',
        position: 'absolute',
        top: '0',
        right: '0',
        bottom: '0',
        width: '24',
        background: 'linear-gradient(to right, transparent, #1E1E1E)',
        pointerEvents: 'none',
        zIndex: '1',
      },
    })}
  >
    <ScrollArea.Viewport>
      <pre
        className={css({
          p: '3',
          color: 'text.secondary',
          fontFamily: 'mono',
          fontSize: 'sm',
          mr: '8', // Add right margin to prevent text from being hidden behind the CopyButton
        })}
      >
        <code
          className={css({
            fontWeight: '900',
            background: 'linear-gradient(to right, #C6FFDD, #FBD786, #f7797d)',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'block',
            whiteSpace: 'pre',
          })}
        >
          {value}
        </code>
      </pre>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar
      orientation="horizontal"
      css={{ zIndex: '2', _hover: { bg: 'rgba(255,255,255,0.08)' } }}
    >
      <ScrollArea.Thumb
        css={{ bg: 'rgba(255,255,255,0.3)', _hover: { bg: 'rgba(255,255,255,0.5)' } }}
      />
    </ScrollArea.Scrollbar>
  </ScrollArea.Root>
)

export function PackageTabs({ npm, yarn, pnpm }: PackageTabsProps) {
  const [activeTab, setActiveTab] = React.useState('npm')

  // Load preferred tab from localStorage on mount
  React.useEffect(() => {
    try {
      const storedTab = localStorage.getItem('preferredPackageManager')
      if (storedTab && ['npm', 'yarn', 'pnpm'].includes(storedTab)) {
        setActiveTab(storedTab)
      }
    } catch (e) {
      // Ignore localStorage errors (e.g. in incognito mode)
    }
  }, [])

  // Save preference when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    try {
      localStorage.setItem('preferredPackageManager', value)
    } catch (e) {
      // Ignore localStorage errors
    }
  }

  // Get current tab content for copy button
  const getCurrentTabContent = () => {
    switch (activeTab) {
      case 'npm':
        return npm
      case 'yarn':
        return yarn
      case 'pnpm':
        return pnpm
      default:
        return npm
    }
  }

  const styles = docTabs({ variant: 'package' })

  return (
    <div>
      <Root value={activeTab} onValueChange={handleTabChange} className={styles.root}>
        <TabList className={styles.tabList}>
          <Trigger value="npm" className={styles.trigger}>
            npm
          </Trigger>
          <Trigger value="yarn" className={styles.trigger}>
            yarn
          </Trigger>
          <Trigger value="pnpm" className={styles.trigger}>
            pnpm
          </Trigger>
        </TabList>

        {/* Container for all content tabs with relative positioning */}
        <div className={styles.contentContainer}>
          {/* Copy button that stays in place for all tabs */}
          <CopyButton
            value={getCurrentTabContent()}
            className={css({
              top: '5',
              right: '4',
              zIndex: '2',
            })}
          />
          <div>
            <Content value="npm" className={styles.content}>
              <TabContent value={npm} />
            </Content>

            <Content value="yarn" className={styles.content}>
              <TabContent value={yarn} />
            </Content>

            <Content value="pnpm" className={styles.content}>
              <TabContent value={pnpm} />
            </Content>
          </div>
        </div>
      </Root>
    </div>
  )
}
