import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type Props = {
  trigger: ReactNode
} & ComponentPropsWithoutRef<typeof DropdownMenu.Root>

export const Dropdown = forwardRef<ElementRef<typeof DropdownMenu.Root>, Props>((props, ref) => {
  const { children, modal = false, trigger, ...rest } = props

  return (
    <DropdownMenu.Root {...rest}>
      <DropdownMenu.Trigger className={s.trigger} ref={ref}>
        {trigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent}>{children}</DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
})

Dropdown.displayName = 'Dropdown'
