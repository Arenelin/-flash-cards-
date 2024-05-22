import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ToastNotification } from '@/common/components/toastNotification/ToastNotification'
import { Header } from '@/features/layout/ui/header/Header'
import classNames from 'classnames'

import s from '@/features/layout/layout.module.scss'

type LayoutProps = ComponentPropsWithoutRef<'body'>

export const Layout = forwardRef<ElementRef<'body'>, LayoutProps>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <body className={classNames(s.container, className)} ref={ref} {...rest}>
      <Header isAuthorization={false} />
      <ToastNotification />
      <main className={s.main}>{children}</main>
    </body>
  )
})

Layout.displayName = 'Layout'
