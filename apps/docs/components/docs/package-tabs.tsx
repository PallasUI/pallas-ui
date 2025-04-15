'use client'

import { css } from '@styled-system/css'
import React from 'react'
import { Content, Root, TabList, Trigger } from '../ui/tabs'
import { CopyButton } from './copy-button'

interface PackageTabsProps {
  npm: string
  yarn: string
  pnpm: string
}

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

  return (
    <div>
      <Root
        value={activeTab}
        onValueChange={handleTabChange}
        className={css({
          border: '1px solid',
          borderColor: 'border',
          rounded: 'md',
          overflow: 'hidden',
        })}
      >
        <TabList
          className={css({
            bg: 'fill.tertiary',
            borderBottom: '1px solid',
            borderColor: 'border',
          })}
        >
          <Trigger
            value="npm"
            className={css({
              p: '3', // Changed from padding.inline.md
              fontWeight: activeTab === 'npm' ? 'semibold' : 'normal',
              borderBottom: activeTab === 'npm' ? '2px solid' : 'none',
              borderColor: 'primary',
            })}
          >
            npm
          </Trigger>
          <Trigger
            value="yarn"
            className={css({
              p: '3', // Changed from padding.inline.md
              fontWeight: activeTab === 'yarn' ? 'semibold' : 'normal',
              borderBottom: activeTab === 'yarn' ? '2px solid' : 'none',
              borderColor: 'primary',
            })}
          >
            yarn
          </Trigger>
          <Trigger
            value="pnpm"
            className={css({
              p: '3', // Changed from padding.inline.md
              fontWeight: activeTab === 'pnpm' ? 'semibold' : 'normal',
              borderBottom: activeTab === 'pnpm' ? '2px solid' : 'none',
              borderColor: 'primary',
            })}
          >
            pnpm
          </Trigger>
        </TabList>

        {/* Container for all content tabs with relative positioning */}
        <div className={css({ position: 'relative' })}>
          {/* Copy button that stays in place for all tabs */}
          <CopyButton
            value={getCurrentTabContent()}
            className={css({
              top: '4', // Changed from padding.inline.lg
              right: '4', // Changed from padding.inline.lg
            })}
          />
          <div>
            <Content
              value="npm"
              className={css({
                p: '2',
                bg: 'surface.container',
              })}
            >
              <pre
                className={css({
                  bg: 'bgSolid',
                  p: '3',
                  rounded: 'md',
                  color: 'text.secondary',
                  border: '1px solid',
                  borderColor: 'border',
                  overflow: 'auto',
                  fontFamily: 'mono',
                  fontSize: 'sm',
                })}
              >
                <code
                  className={css({
                    color: '#D4D4D4', // Light gray color similar to dark-plus theme
                    display: 'block',
                    whiteSpace: 'pre',
                  })}
                >
                  {npm}
                </code>
              </pre>
            </Content>

            {/* Update the other Content components similarly */}
            <Content
              value="yarn"
              className={css({
                p: '2',
                bg: 'surface.container',
              })}
            >
              <pre
                className={css({
                  bg: 'bgSolid', // Changed to match code blocks
                  p: '3',
                  rounded: 'md',
                  color: 'text.secondary',
                  border: '1px solid',
                  borderColor: 'border',
                  overflow: 'auto',
                  fontFamily: 'mono',
                  fontSize: 'sm',
                })}
              >
                <code
                  className={css({
                    color: '#D4D4D4', // Light gray color similar to dark-plus theme
                    display: 'block',
                    whiteSpace: 'pre',
                  })}
                >
                  {yarn}
                </code>
              </pre>
            </Content>

            <Content
              value="pnpm"
              className={css({
                p: '2',
                bg: 'surface.container',
              })}
            >
              <pre
                className={css({
                  bg: 'bgSolid', // Changed to match code blocks
                  p: '3',
                  rounded: 'md',
                  color: 'text.secondary',
                  border: '1px solid',
                  borderColor: 'border',
                  overflow: 'auto',
                  fontFamily: 'mono',
                  fontSize: 'sm',
                })}
              >
                <code
                  className={css({
                    color: '#D4D4D4', // Light gray color similar to dark-plus theme
                    display: 'block',
                    whiteSpace: 'pre',
                  })}
                >
                  {pnpm}
                </code>
              </pre>
            </Content>
          </div>
        </div>
      </Root>
    </div>
  )
}
