import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Error404 } from '@/assets/icons'
import { Button, Typography } from '@/common/components/ui'
import classNames from 'classnames'

import s from './Error.module.scss'
export default {}
type ErrorProps = ComponentPropsWithoutRef<'div'>
export const Error = forwardRef<ElementRef<'div'>, ErrorProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div className={classNames(s.container, className)} {...rest} ref={ref}>
      <Error404 className={classNames(s.icon, className)} />
      <Typography as={'h2'} variant={'body1'}>
        Sorry! Page not found!
      </Typography>
      <Button as={'a'} href={'#'}>
        Back to home page
      </Button>
    </div>
  )
})
