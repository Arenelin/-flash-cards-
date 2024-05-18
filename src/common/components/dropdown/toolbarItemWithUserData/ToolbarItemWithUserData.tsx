import { ElementRef, forwardRef } from 'react'

import { Typography } from '@/common/components'
import { UserAvatar } from '@/common/components/userAvatar/UserAvatar'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './toolbarItemUserData.module.scss'

type UserData = {
  email: string
  img: string
  name: string
}
type Props = {
  onSelect?: () => void
  userData: UserData
}
export const ToolbarItemWithUserData = forwardRef<ElementRef<typeof DropdownMenu.Item>, Props>(
  ({ onSelect, userData }, ref) => {
    // const { onSelect, userData } = props

    return (
      <DropdownMenu.Item className={s.DropdownMenuItem} onSelect={onSelect} ref={ref}>
        <UserAvatar name={userData.name} src={userData.img} />
        <div className={s.dataContainer}>
          <Typography as={'span'} className={s.name} variant={'subtitle2'}>
            {userData.name}
          </Typography>
          <Typography as={'span'} className={s.email} variant={'caption'}>
            {userData.email}
          </Typography>
        </div>
      </DropdownMenu.Item>
    )
  }
)

ToolbarItemWithUserData.displayName = 'ToolbarItemWithUserData'
