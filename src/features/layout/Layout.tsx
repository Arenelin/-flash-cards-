import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Preloader } from '@/common/components/preloader/Preloader'
import { MeResponse } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import { Header } from '@/features/layout/ui/header/Header'
import classNames from 'classnames'

import s from '@/features/layout/layout.module.scss'

type LayoutProps = ComponentPropsWithoutRef<'body'>

export const Layout = forwardRef<ElementRef<'body'>, LayoutProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { data, isError, isLoading } = useGetMeQuery()

  if (isLoading) {
    return <Preloader />
  }

  const meData = data as MeResponse

  return (
    <body className={classNames(s.container, className)} ref={ref} {...rest}>
      <Header
        avatar={meData?.avatar || ''}
        email={meData?.email || ''}
        isAuthorization={!isError}
        name={meData?.name || ''}
      />
      <main className={s.main}>{children}</main>
    </body>
  )
})

Layout.displayName = 'Layout'
