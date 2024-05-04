import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  forwardRef,
  useId,
} from 'react'

import classNames from 'classnames'

import s from './typography.module.scss'

type Theme = 'dark' | 'light' // TODO move to store

export type TextProps<T extends ElementType = 'p'> = {
  as?: T
  id?: string
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
} & { ref?: PolymorphicRef<T> } & ComponentPropsWithoutRef<T>

type PolymorphicRef<T extends ElementType = 'p'> = ComponentPropsWithRef<T>['ref']

type TypographyWithRef = <T extends ElementType = 'div'>(
  props: TextProps<T>,
  ref?: PolymorphicRef<T>
) => ReactNode
export const Typography: TypographyWithRef = forwardRef(
  <T extends ElementType = 'p'>(props: TextProps<T>, ref?: PolymorphicRef<T>) => {
    const { as: Component = 'p', className, id, variant = 'body1', ...rest } = props
    const theme: Theme = 'dark' // TODO rewrite the values from the store to the call
    const genID = useId()
    const finalId = id || genID

    return (
      <Component
        className={classNames(s[theme], s[variant], className)}
        id={finalId}
        ref={ref}
        {...rest}
      />
    )
  }
)
