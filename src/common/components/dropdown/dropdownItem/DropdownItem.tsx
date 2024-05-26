import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import classNames from 'classnames'

import s from './dropdownItem.module.scss'

type Props = ComponentPropsWithoutRef<typeof DropdownMenu.Item>
export const DropdownItem = forwardRef<ElementRef<typeof DropdownMenu.Item>, Props>(
  ({ className, ...rest }, ref) => {
    return (
      <DropdownMenu.Item
        className={classNames(s.DropdownMenuItem, className)}
        ref={ref}
        {...rest}
      />
    )
  }
)

DropdownItem.displayName = 'DropdownItem'
