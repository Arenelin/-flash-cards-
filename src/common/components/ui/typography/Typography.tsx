import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import classNames from 'classnames'

import s from './typography.module.scss'

type Theme = 'dark' | 'light' // TODO move to store

export type TextProps<T extends ElementType> = {
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
    | 'link3'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']

export const Typography = forwardRef(
  <T extends ElementType = 'p'>(props: TextProps<T>, ref: PolymorphicRef<T>) => {
    const { as: Component = 'p', className, variant = 'body1', ...restProps } = props
    const theme: Theme = 'dark' // TODO rewrite the values from the store to the call

    return (
      <Component className={classNames(s[theme], s[variant], className)} ref={ref} {...restProps} />
    )
  }
)

Typography.displayName = 'Typography'
