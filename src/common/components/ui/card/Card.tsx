import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'

import classNames from 'classnames'

import s from '@/common/components/ui/card/card.module.scss'

type CardProps<T extends ElementType = 'div'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

const CardPolymorph = <T extends ElementType = 'div'>(props: CardProps<T>, ref?: any) => {
  const { as: Component = 'div', className, id, ...rest } = props

  return <Component className={classNames(s.container, className)} {...rest} ref={ref}></Component>
}

export const Card = forwardRef(CardPolymorph) as <T extends ElementType = 'button'>(
  props: {
    ref?: ForwardedRef<ElementRef<T>>
  } & CardProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>
) => ReturnType<typeof CardPolymorph>
