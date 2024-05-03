import { ReactNode } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './toolbarItemWithIcon.module.scss'

type Props = {
  icon: ReactNode
  onSelect: () => void
  textContent: ReactNode
}
export const ToolbarItemWithIcon = (props: Props) => {
  const { icon, onSelect, textContent } = props

  return (
    <>
      <DropdownMenu.Item className={s.DropdownMenuItem} onSelect={onSelect}>
        {icon}
        {textContent}
      </DropdownMenu.Item>
    </>
  )
}
