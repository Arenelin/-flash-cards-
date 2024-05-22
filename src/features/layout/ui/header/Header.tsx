import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Navigate } from 'react-router-dom'

import { LogOutOutline, PersonOutline } from '@/assets/icons'
import logo from '@/assets/logoStart.png'
import { Button, Dropdown, Typography, UserAvatar } from '@/common/components'
import { DropdownSeparator } from '@/common/components/dropdown/dropdownSeparator/DropdownSeparator'
import { ToolbarItemWithIcon } from '@/common/components/dropdown/toolbarItemWithIcon/ToolbarItemWithIcon'
import { DefaultDescription } from '@/common/components/dropdown/toolbarItemWithIcon/defaultDescription/DefaultDescription'
import { ToolbarItemWithUserData } from '@/common/components/dropdown/toolbarItemWithUserData/ToolbarItemWithUserData'
import { useLogOutMutation } from '@/features/auth/api/authApi'
import classNames from 'classnames'

import s from '@/features/layout/ui/header/header.module.scss'

type HeaderProps = {
  avatar?: string
  email?: string
  isAuthorization: boolean
  name?: string
} & ComponentPropsWithoutRef<'header'>
export const Header = forwardRef<ElementRef<'header'>, HeaderProps>((props, ref) => {
  const { avatar, className, email, isAuthorization, name, ...rest } = props
  const [logOut] = useLogOutMutation()

  return (
    <header className={classNames(s.container, className)} {...rest} ref={ref}>
      <Typography as={'a'} href={'/decks'}>
        <img alt={'logo'} className={s.img} height={'36px'} src={logo} width={'160px'} />
      </Typography>
      {isAuthorization ? (
        <Dropdown triggerChild={<UserAvatar name={name} src={avatar} />}>
          <ToolbarItemWithUserData userData={{ avatar, email, name }} />
          <DropdownSeparator />
          <ToolbarItemWithIcon
            icon={<PersonOutline />}
            onSelect={() => <Navigate to={'/profile'} />}
            textContent={<DefaultDescription text={'My Profile'} />}
          />
          <DropdownSeparator />

          <ToolbarItemWithIcon
            icon={<LogOutOutline />}
            onSelect={() => {
              logOut()
            }}
            textContent={<DefaultDescription text={'Sign Out'} />}
          />
        </Dropdown>
      ) : (
        <Button as={'a'} href={'/singIn'} variant={'secondary'}>
          Sing In
        </Button>
      )}
    </header>
  )
})

Header.displayName = 'Header'
