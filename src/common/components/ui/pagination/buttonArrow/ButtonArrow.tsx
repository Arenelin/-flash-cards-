import { ComponentPropsWithoutRef } from 'react'

import classNames from 'classnames'

import s from './buttonArrow.module.scss'

type Props = ComponentPropsWithoutRef<'button'>

export const ButtonArrow = ({ className, ...rest }: Props) => {
  const baseStyle = classNames(className, s.arrow)

  return <button {...rest} className={baseStyle} />
}
