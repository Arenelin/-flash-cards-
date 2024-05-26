import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { LogOutOutline, PersonOutline } from '@/assets/icons'
import logo from '@/assets/logo.png'
import { Button, Dropdown, Typography, UserAvatar } from '@/common/components'
import { DropdownItem } from '@/common/components/dropdown/dropdownItem/DropdownItem'
import { DefaultDescription } from '@/common/components/dropdown/dropdownItem/defaultDescription/DefaultDescription'
import { DropdownSeparator } from '@/common/components/dropdown/dropdownSeparator/DropdownSeparator'
import { ToolbarItemWithUserData } from '@/common/components/dropdown/toolbarItemWithUserData/ToolbarItemWithUserData'
import { path } from '@/common/enums'
import { router } from '@/router/Router'
import classNames from 'classnames'

import s from '@/features/layout/ui/header/header.module.scss'

type HeaderProps = {
  avatar?: string
  email?: string
  isAuthorization: boolean
  logOut: () => void
  name?: string
} & ComponentPropsWithoutRef<'header'>
export const Header = forwardRef<ElementRef<'header'>, HeaderProps>((props, ref) => {
  const { avatar, className, email, isAuthorization, logOut, name, ...rest } = props

  const selectProfile = () => {
    router.navigate(path.profile)
  }

  return (
    <header className={classNames(s.container, className)} {...rest} ref={ref}>
      <Typography as={'a'} href={path.decks}>
        <img alt={'logo'} className={s.img} height={'36px'} src={logo} width={'160px'} />
      </Typography>
      {isAuthorization ? (
        <Dropdown trigger={<UserAvatar name={name} src={avatar} />}>
          <ToolbarItemWithUserData userData={{ avatar, email, name }} />
          <DropdownSeparator />
          <DropdownItem
            icon={<PersonOutline />}
            onSelect={selectProfile}
            textContent={<DefaultDescription text={'My Profile'} />}
          />
          <DropdownSeparator />

          <DropdownItem
            icon={<LogOutOutline />}
            onSelect={logOut}
            textContent={<DefaultDescription text={'Sign Out'} />}
          />
        </Dropdown>
      ) : (
        <Button as={'a'} href={path.signIn} variant={'secondary'}>
          Sign In
        </Button>
      )}
    </header>
  )
})

Header.displayName = 'Header'
