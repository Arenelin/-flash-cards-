import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ArrowDown, ArrowUp } from '@/assets/icons'
import { Typography } from '@/common/components'
import { orderBy } from '@/common/enums'

import s from './buttonSort.module.scss'

type SortFilterProps = {
  onSort: (sort: 'asc' | 'desc', text: string) => void
  sort: 'asc' | 'desc'
  text: string
} & ComponentPropsWithoutRef<'button'>
export const ButtonSort = forwardRef<ElementRef<'button'>, SortFilterProps>((props, ref) => {
  const { onClick, onSort, sort, text, ...rest } = props

  const onSortHandler = () => {
    const nameUpdate = text === 'Last Updated' && orderBy.LastUpdated
    const nameSort = text === 'Name' && orderBy.Name
    const nameCreated = text === 'Created By' && orderBy.CreatedBy
    const name = nameUpdate || nameSort || nameCreated || ''

    onSort(sort, name)
  }

  return (
    <>
      <button className={s.button} onClick={onSortHandler} {...rest} ref={ref}>
        <Typography as={'span'} variant={'subtitle2'}>
          {text}
        </Typography>
        {sort === 'asc' ? <ArrowUp className={s.icon} /> : <ArrowDown className={s.icon} />}
      </button>
    </>
  )
})

ButtonSort.displayName = 'ButtonSort'
