import { ElementRef, ReactNode, forwardRef } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './toolbarItemWithIcon.module.scss'

type Props = {
  icon: ReactNode
  onSelect: () => void
  textContent: ReactNode
}
export const ToolbarItemWithIcon = forwardRef<ElementRef<typeof DropdownMenu.Item>, Props>(
  ({ icon, onSelect, textContent }, ref) => {
    return (
      <>
        <DropdownMenu.Item className={s.DropdownMenuItem} onSelect={onSelect} ref={ref}>
          {icon}
          {textContent}
        </DropdownMenu.Item>
      </>
    )
  }
)

ToolbarItemWithIcon.displayName = 'ToolbarItemWithIcon'
