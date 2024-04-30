import { ComponentPropsWithoutRef } from 'react'

import s from './buttonArrow.module.scss'

type Props = ComponentPropsWithoutRef<'button'>

export const ButtonArrow = ({ className, ...rest }: Props) => {
  return <button {...rest} className={s.arrow} />
}
