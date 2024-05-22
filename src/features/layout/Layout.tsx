import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Preloader } from '@/common/components/preloader/Preloader'
import { ToastNotification } from '@/common/components/toastNotification/ToastNotification'
import { MeResponse } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import { Header } from '@/features/layout/ui/header/Header'
import classNames from 'classnames'

import s from '@/features/layout/layout.module.scss'

type LayoutProps = ComponentPropsWithoutRef<'div'>

export const Layout = forwardRef<ElementRef<'div'>, LayoutProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { data, isError, isLoading } = useGetMeQuery()

  if (isLoading) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  const meData = data as MeResponse

  return (
    <div className={classNames(s.container, className)} ref={ref} {...rest}>
      <Header
        avatar={meData?.avatar || ''}
        email={meData?.email || ''}
        isAuthorization={!isError}
        name={meData?.name || ''}
      />
      <ToastNotification />
      <main className={s.main}>{children}</main>
    </div>
  )
})

Layout.displayName = 'Layout'
