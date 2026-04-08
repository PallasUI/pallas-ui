'use client'

import Accordion from '@/components/ui/accordion'
import { css } from '@styled-system/css'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const AccordionShowcase = () => {
  return (
    <ShowcaseCard paddingTitle="0" paddingBlock="0">
      <div className={css({ width: '100%' })}>
        <Accordion.Root type="single" collapsible>
          <Accordion.Item value="item-1">
            <Accordion.ItemHeader>
              What is Pallas UI?
              <Accordion.ItemTrigger>
                <ChevronDown />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>
              Pallas UI is a modern, accessible component library built with React and styled with
              Panda CSS. It provides a comprehensive set of customizable UI components to help
              developers build beautiful and consistent user interfaces.
            </Accordion.ItemContent>
          </Accordion.Item>

          <Accordion.Item value="item-2">
            <Accordion.ItemHeader>
              How do I install Pallas UI?
              <Accordion.ItemTrigger>
                <ChevronDown />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>
              You can install Pallas UI using npm or yarn:
              <pre
                className={css({
                  mt: '2',
                  p: '3',
                  bg: 'gray.100',
                  borderRadius: 'md',
                  fontSize: 'sm',
                  overflowX: 'auto',
                })}
              >
                npm install @pallas-ui/react
              </pre>
            </Accordion.ItemContent>
          </Accordion.Item>

          <Accordion.Item value="item-3">
            <Accordion.ItemHeader>
              Is Pallas UI customizable?
              <Accordion.ItemTrigger>
                <ChevronDown />
              </Accordion.ItemTrigger>
            </Accordion.ItemHeader>
            <Accordion.ItemContent>
              Yes, Pallas UI is highly customizable. You can customize the appearance of components
              using Panda CSS tokens and recipes. The library is designed to be flexible while
              maintaining a consistent design language.
            </Accordion.ItemContent>
          </Accordion.Item>
        </Accordion.Root>
      </div>
    </ShowcaseCard>
  )
}
