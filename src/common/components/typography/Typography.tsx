import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react'

import { Theme } from '@/common/types'
import classNames from 'classnames'

import s from './typography.module.scss'

export type TextProps<T extends ElementType> = {
  as?: T
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'error'
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

function TypographyPolymorph<T extends ElementType = 'p'>(
  props: TextProps<T>,
  ref: PolymorphicRef<T>
) {
  const { as: Component = 'p', className, variant = 'body1', ...restProps } = props
  const theme: Theme = 'dark' // TODO rewrite the values from the store to the call

  return (
    <Component className={classNames(s[theme], s[variant], className)} ref={ref} {...restProps} />
  )
}

export const Typography = forwardRef(TypographyPolymorph) as <T extends ElementType = 'p'>(
  props: {
    ref?: ForwardedRef<ElementRef<T>>
  } & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>> &
    TextProps<T>
) => ReturnType<typeof TypographyPolymorph>
