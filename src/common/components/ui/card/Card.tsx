import {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
  forwardRef,
  useId,
} from 'react'

import classNames from 'classnames'

import s from '@/common/components/ui/card/card.module.scss'

//https://www.benmvp.com/blog/forwarding-refs-polymorphic-react-component-typescript/
//https://www.freecodecamp.org/news/build-strongly-typed-polymorphic-components-with-react-and-typescript/

type Variant = 'article' | 'aside' | 'div' | 'section'

type CardProps<T extends ElementType = 'div'> = {
  as?: T | Variant
} & { ref?: PolymorphicRef<T> } & ComponentPropsWithoutRef<T>

type Props<T extends ElementType = 'div'> = CardProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof CardProps<T>>

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref']

type CardWithRef = <T extends ElementType = 'div'>(
  props: CardProps<T>,
  ref?: PolymorphicRef<T>
) => ReactNode

export const Card: CardWithRef = forwardRef(function Card<T extends ElementType = 'div'>(
  props: Props<T>,
  ref?: PolymorphicRef<T>
) {
  const { as: Component = 'div', className, id, ...rest } = props

  const genID = useId()
  const finalId = id || genID
  const baseClassName = {
    container: classNames(s.container, className),
  }

  return (
    <Component className={baseClassName.container} ref={ref} {...rest} id={finalId}></Component>
  )
})
