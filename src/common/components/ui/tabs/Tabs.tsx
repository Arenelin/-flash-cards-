import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/common/components/ui'
import * as TabsSwitcher from '@radix-ui/react-tabs'
import classNames from 'classnames'

import s from './tabs.module.scss'

export type Tab = {
  disabled?: boolean
  text: string
  value: string
}

type TabsProps = {
  classNameTypography?: string
  label?: string
  onValueChange: (value: string) => void
  tabs: Tab[]
} & ComponentPropsWithoutRef<typeof TabsSwitcher.Root>

export const Tabs = forwardRef<ElementRef<typeof TabsSwitcher.Root>, TabsProps>((props, ref) => {
  const { className, classNameTypography, label, onValueChange, tabs, value, ...rest } = props

  return (
    <Typography as={'div'} className={classNames(s.label, classNameTypography)} variant={'body2'}>
      {label}
      <TabsSwitcher.Root
        className={classNames(s.root, className)}
        onValueChange={onValueChange}
        ref={ref}
        value={value}
        {...rest}
      >
        <TabsSwitcher.List>
          {tabs.map(t => (
            <TabsSwitcher.Trigger
              className={s.trigger}
              disabled={t.disabled}
              key={t.value}
              value={t.value}
            >
              {t.text}
            </TabsSwitcher.Trigger>
          ))}
        </TabsSwitcher.List>
      </TabsSwitcher.Root>
    </Typography>
  )
})
