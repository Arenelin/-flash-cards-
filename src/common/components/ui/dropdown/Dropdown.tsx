import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type Props = {
  modal?: boolean
  triggerChild: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

export const Dropdown = forwardRef<ElementRef<typeof DropdownMenu.Root>, Props>((props, ref) => {
  const { children, modal = false, triggerChild } = props

  return (
    <DropdownMenu.Root modal={modal}>
      <DropdownMenu.Trigger asChild className={s.trigger} ref={ref}>
        <button className={s.triggerButton}>{triggerChild}</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent}>{children}</DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
})

Dropdown.displayName = 'Dropdown'
