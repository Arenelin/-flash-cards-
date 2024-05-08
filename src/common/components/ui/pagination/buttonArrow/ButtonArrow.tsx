import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from './buttonArrow.module.scss'

type Props = ComponentPropsWithoutRef<'button'>

export const ButtonArrow = forwardRef<HTMLButtonElement, Props>(({ className, ...rest }, ref) => {
  return <button {...rest} className={s.arrow} ref={ref} />
})

ButtonArrow.displayName = 'ButtonArrow'
