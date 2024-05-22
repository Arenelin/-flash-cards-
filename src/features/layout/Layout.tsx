import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Preloader } from '@/common/components/preloader/Preloader'
import { ErrorResponse, MeResponse } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import { Header } from '@/features/layout/ui/header/Header'
import classNames from 'classnames'

import s from '@/features/layout/layout.module.scss'

type LayoutProps = ComponentPropsWithoutRef<'body'>

export const Layout = forwardRef<ElementRef<'body'>, LayoutProps>((props, ref) => {
  const { children, className, ...rest } = props

  const { data, error, isLoading } = useGetMeQuery()

  if (isLoading) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  if (error) {
    const err = error as ErrorResponse

    return (
      <div className={s.error}>
        {err.data.errorMessages.map(e => (
          <p key={e.field}>{`at query parameter " ${e.field} " error: " ${e.message} "`}</p>
        ))}
      </div>
    )
  }

  const meData = data as MeResponse

  return (
    <body className={classNames(s.container, className)} ref={ref} {...rest}>
      <Header
        avatar={meData.avatar}
        email={meData.email}
        isAuthorization={!!meData?.id}
        name={meData.name}
      />
      <main className={s.main}>{children}</main>
    </body>
  )
})

Layout.displayName = 'Layout'
