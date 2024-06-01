import { router } from '@/app/Router'
import logo from '@/assets/logo.png'
import { Button, Typography } from '@/common/components'
import UserDropdown from '@/common/components/dropdown/userDropdown/UserDropdown'
import { path } from '@/common/enums'
import classNames from 'classnames'

import s from '@/features/layout/ui/header/header.module.scss'

export type HeaderProps = {
  avatar?: string
  email?: string
  isAuth: boolean
  logOut: () => void
  name?: string
}
export const Header = (props: HeaderProps) => {
  const { avatar, email, isAuth, logOut, name, ...rest } = props

  const selectProfile = () => {
    router.navigate(path.profile)
  }

  return (
    <header className={classNames(s.container)} {...rest}>
      <Typography as={'a'} className={s.link} href={path.base}>
        <img alt={'logo'} className={s.img} src={logo} />
      </Typography>

      <Typography as={'b'} className={s.title}>
        <i>Educational Project</i>
      </Typography>

      {isAuth ? (
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
}

Header.displayName = 'Header'
