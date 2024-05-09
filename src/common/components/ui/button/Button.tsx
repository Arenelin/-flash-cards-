import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  forwardRef,
} from 'react'

import classNames from 'classnames'

import s from './button.module.scss'

type ButtonVariant = 'primary' | 'secondary'

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']
type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

function ButtonPolymorph<T extends ElementType = 'button'>(
  props: ButtonProps<T>,
  ref: PolymorphicRef<T>
) {
  const {
    as: Component = 'button',
    className,
    fullWidth = false,
    variant = 'primary',
    ...rest
  } = props

  return (
    <Component
      className={classNames(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...rest}
      ref={ref}
    />
  )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
  props: {
    ref?: ForwardedRef<ElementRef<T>>
  } & ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>
) => ReturnType<typeof ButtonPolymorph>
