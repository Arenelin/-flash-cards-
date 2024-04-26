import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './typography.module.scss'

type Theme = 'dark' | 'light' // TODO move to store

export type TextProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className?: string
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
}

export function Typography<T extends ElementType = 'p'>({
  as,
  className,
  variant = 'body1',
  ...restProps
}: Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>> & TextProps<T>) {
  const Component = as || 'p'
  const theme: Theme = 'light' // TODO rewrite the values from the store to the call
  const classNames = `${s[theme]} ${s[variant]} ${className}` // TODO rewrite with using clsx-library or similar

  return <Component className={classNames} {...restProps} />
}
