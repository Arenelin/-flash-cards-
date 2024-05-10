import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowUp } from '@/assets/icons'
import { Typography } from '@/common/components/ui'

import s from './sortFilter.module.scss'

type SortFilterProps = {
  onSort: () => void
} & ComponentPropsWithoutRef<'button'>
export const SortFilter = forwardRef<ElementRef<'button'>, SortFilterProps>((props, ref) => {
  const { onSort, ...rest } = props

  return (
    <button className={s.button} onClick={onSort} {...rest} ref={ref}>
      <Typography as={'span'} variant={'subtitle2'}>
        Last Updated
      </Typography>
      <ArrowUp className={s.icon} />
    </button>
  )
})

SortFilter.displayName = 'SortFilter'
