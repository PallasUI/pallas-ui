'use client'

import { useGSAP } from '@gsap/react'
import { css } from '@styled-system/css'
import { Flex } from '@styled-system/jsx'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import React, { useRef } from 'react'
import { AccordionShowcase } from './accordion-showcase'
import { BadgeSeparatorShowcase } from './badge-separator-showcase'
import { DatePickerShowcase } from './date-picker-showcase'
import { InputDatePickerShowcase } from './input-date-picker-showcase'
import { FormControlsShowcase } from './form-controls-showcase'
import { FormShowcase } from './form-showcase'
import { MenubarShowcase } from './menubar-showcase'
import { PopoverTooltipShowcase } from './popover-tooltip-showcase'
import { ProfileScenarioShowcase } from './profile-scenario-showcase'
import { ProgressShowcase } from './progress-showcase'
import { ShowcaseContainer } from './showcase-container'
import { SliderTabsShowcase } from './slider-tabs-showcase'
import { ToastSelectShowcase } from './toast-select-showcase'

gsap.registerPlugin(useGSAP, ScrollSmoother)

export const ComponentShowcase = () => {
  return (
    <ShowcaseContainer title="Component Showcase">
      <div
        className={css({
          display: 'flex',
          flexDirection: { base: 'column', md: 'row' },
          gap: 'layout.internal.lg',
          bg: 'transparent',
          mx: 'auto',
          maxW: '1200px',
        })}
      >
        {/* Column 1 */}
        <Flex direction="column" gap="layout.internal.lg" flex={1} data-speed="0.8">
          <FormShowcase />
          <InputDatePickerShowcase />
          <PopoverTooltipShowcase />
          <ProgressShowcase />
        </Flex>
        {/* Column 2 */}
        <Flex direction="column" gap="layout.internal.lg" flex={1} data-speed="1.2">
          <ProfileScenarioShowcase />
          <AccordionShowcase />
          <BadgeSeparatorShowcase />
          <ToastSelectShowcase />
        </Flex>
        {/* Column 3 */}
        <Flex direction="column" gap="layout.internal.lg" flex={1} data-speed="1.6">
          <MenubarShowcase />
          <FormControlsShowcase />
          <DatePickerShowcase />
          <SliderTabsShowcase />
        </Flex>
      </div>
    </ShowcaseContainer>
  )
}
