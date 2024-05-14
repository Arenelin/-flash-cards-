import { CSSProperties, ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import classNames from 'classnames'

import s from './page.module.scss'

type PageProps = {
  marginTop?: CSSProperties['marginTop']
} & ComponentPropsWithoutRef<'section'>
export const Page = forwardRef<ElementRef<'section'>, PageProps>((props, ref) => {
  const { className, marginTop = '36px', style, ...rest } = props
  const styles = { ...style, marginTop }

  return (
    <section className={classNames(s.container, className)} ref={ref} style={styles} {...rest} />
  )
})
Page.displayName = 'Page'
