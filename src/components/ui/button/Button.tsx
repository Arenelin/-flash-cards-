import { ComponentPropsWithoutRef, ElementType } from 'react'

import s from './button.module.scss'

type ButtonVariant = 'primary' | 'secondary'
type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentPropsWithoutRef<T>
export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T>) => {
  const {
    as: Component = 'button',
    className,
    fullWidth = false,
    variant = 'primary',
    ...rest
  } = props
  const classNames = {
    root: `${s.button} ${className} ${s[variant]} ${fullWidth ? s.fullWidth : ''}`,
  }

  return <Component className={classNames.root} {...rest} />
}
