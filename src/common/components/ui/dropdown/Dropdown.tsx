import { ComponentProps, ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown.module.scss'

type Props = {
  modal?: boolean
  triggerChild: ReactNode
} & ComponentProps<typeof DropdownMenu.Root>

export const Dropdown = (props: Props) => {
  const { children, modal = false, triggerChild } = props

  return (
    <DropdownMenu.Root modal={modal}>
      <DropdownMenu.Trigger asChild className={s.trigger}>
        <button className={s.triggerButton}>{triggerChild}</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent}>{children}</DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
