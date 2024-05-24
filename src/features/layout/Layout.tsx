import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { Outlet } from 'react-router-dom'

import { Preloader } from '@/common/components/preloader/Preloader'
import { ToastNotification } from '@/common/components/toastNotification/ToastNotification'
import { MeResponse, SignErrorResponse } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import { Header } from '@/features/layout/ui/header/Header'
import classNames from 'classnames'

import s from '@/features/layout/layout.module.scss'

type LayoutProps = ComponentPropsWithoutRef<'div'>

export const Layout = forwardRef<ElementRef<'div'>, LayoutProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { data, error, isError, isLoading } = useGetMeQuery()

  if (isLoading) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  const meData = data as MeResponse
  const isAuth = !isError

  return (
    <div className={classNames(s.container, className)} ref={ref} {...rest}>
      <Header
        avatar={meData?.avatar || ''}
        email={meData?.email || ''}
        isAuthorization={(error as SignErrorResponse)?.status !== 401}
        name={meData?.name || ''}
      />
      <ToastNotification />
      <main className={s.main}>
        <Outlet context={{ isAuth }} />
      </main>
    </div>
  )
})

Layout.displayName = 'Layout'
