import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { router } from '@/app/Router'
import logo from '@/assets/logo.png'
import { Button, Typography } from '@/common/components'
import UserDropdown from '@/common/components/dropdown/userDropdown/UserDropdown'
import { path } from '@/common/enums'
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
        <UserDropdown
          email={email}
          img={avatar}
          name={name}
          onSelectLogOut={logOut}
          onSelectProfile={selectProfile}
        />
      ) : (
        <Button as={'a'} href={path.signIn} variant={'secondary'}>
          Sign In
        </Button>
      )}
    </header>
  )
})

Header.displayName = 'Header'
