import { ComponentPropsWithoutRef, ElementType } from 'react'

import classNames from 'classnames'

import s from './typography.module.scss'

type Theme = 'dark' | 'light' // TODO move to store

export type TextProps<T extends ElementType = 'p'> = {
  as?: T
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TextProps<T>) => {
  const { as: Component = 'p', className, variant = 'body1', ...rest } = props
  const theme: Theme = 'dark' // TODO rewrite the values from the store to the call

  return <Component className={classNames(s[theme], s[variant], className)} {...rest} />
}

Typography.displayName = 'Typography'
