import { Outlet } from 'react-router-dom'

import { Preloader } from '@/common/components/preloader/Preloader'
import { ToastNotification } from '@/common/components/toastNotification/ToastNotification'
import { useGetMeQuery, useLogOutMutation } from '@/features/auth/api/authApi'
import { Header } from '@/features/layout/ui/header/Header'
import classNames from 'classnames'

import s from '@/features/layout/layout.module.scss'

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery()
  const [logOut] = useLogOutMutation()
  const isAuth = !isError

  if (isLoading) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  return (
    <div className={classNames(s.container)}>
      <Header
        avatar={data?.avatar}
        email={data?.email}
        isAuth={isAuth}
        logOut={logOut}
        name={data?.name}
      />
      <ToastNotification />
      <main className={s.main}>
        <Outlet context={{ isAuth }} />
      </main>
    </div>
  )
}

Layout.displayName = 'Layout'
