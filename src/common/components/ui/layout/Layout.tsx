import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import classNames from 'classnames'

import s from './layout.module.scss'
type LayoutProps = ComponentPropsWithoutRef<'body'>
export const Layout = forwardRef<ElementRef<'body'>, LayoutProps>((props, ref) => {
  const { children, className, ...rest } = props

  return (
    <body className={classNames(s.container, className)} ref={ref} {...rest}>
      <header>header</header>
      <main>{children}</main>
    </body>
  )
})

Layout.displayName = 'Layout'
