import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDown, ArrowUp } from '@/assets/icons'
import { Typography } from '@/common/components/ui'

import s from './buttonSort.module.scss'

type SortFilterProps = {
  sort: boolean
  text: string
} & ComponentPropsWithoutRef<'button'>
export const ButtonSort = forwardRef<ElementRef<'button'>, SortFilterProps>((props, ref) => {
  const { sort, text, ...rest } = props

  return (
    <button className={s.button} {...rest} ref={ref}>
      <Typography as={'span'} variant={'subtitle2'}>
        {text}
      </Typography>
      {sort ? <ArrowUp className={s.icon} /> : <ArrowDown className={s.icon} />}
    </button>
  )
})

ButtonSort.displayName = 'SortFilter'
