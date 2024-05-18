import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import Error404 from '@/assets/error404.png'
import { Button, Typography } from '@/common/components'
import classNames from 'classnames'

import s from '@/features/error/Error.module.scss'
export default {}
type ErrorProps = ComponentPropsWithoutRef<'div'>
export const Error = forwardRef<ElementRef<'div'>, ErrorProps>((props, ref) => {
  const { className, ...rest } = props

  return (
    <div className={classNames(s.container, className)} {...rest} ref={ref}>
      <img alt={'Error'} height={'190px'} src={Error404} width={'450px'} />
      <Typography as={'h2'} variant={'body1'}>
        Sorry! Page not found!
      </Typography>
      <Button as={'a'} href={'#'}>
        Back to home page
      </Button>
    </div>
  )
})

Error.displayName = 'Error'
