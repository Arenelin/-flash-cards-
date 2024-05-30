import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdownSeparator.module.scss'

type DropDownSeparator = ComponentPropsWithoutRef<typeof DropdownMenu.Separator>

export const DropdownSeparator = forwardRef<
  ElementRef<typeof DropdownMenu.Separator>,
  DropDownSeparator
>((props, ref) => {
  return <DropdownMenu.Separator className={s.DropdownMenuSeparator} {...props} ref={ref} />
})

DropdownSeparator.displayName = 'DropdownSeparator'
