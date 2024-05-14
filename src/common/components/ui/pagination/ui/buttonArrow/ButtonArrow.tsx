import { ComponentPropsWithoutRef, forwardRef } from 'react'

import s from '@/common/components/ui/pagination/ui/buttonArrow/buttonArrow.module.scss'

type Props = ComponentPropsWithoutRef<'button'>

export const ButtonArrow = forwardRef<HTMLButtonElement, Props>(({ className, ...rest }, ref) => {
  return <button {...rest} className={s.arrow} ref={ref} />
})

ButtonArrow.displayName = 'ButtonArrow'
