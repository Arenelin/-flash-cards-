import { ComponentPropsWithRef, ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import classNames from 'classnames'

import s from './button.module.scss'

type ButtonVariant = 'primary' | 'secondary'

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']
type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(props: ButtonProps<T>, ref: PolymorphicRef<T>) => {
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
        ref={ref}
        {...rest}
      />
    )
  }
)

Button.displayName = 'Button'
