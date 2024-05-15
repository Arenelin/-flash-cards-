import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

import { ArrowDown, ArrowUp } from '@/assets/icons'
import { Typography } from '@/common/components/ui'

import s from '@/common/components/ui/tables/ui/buttonSort/buttonSort.module.scss'

type SortFilterProps = {
  text: string
} & ComponentPropsWithoutRef<'button'>
export const ButtonSort = forwardRef<ElementRef<'button'>, SortFilterProps>((props, ref) => {
  const { onClick, text, ...rest } = props

  const [sort, setSort] = useState<boolean>(false)
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSort(prev => !prev)
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button className={s.button} onClick={onClickHandler} {...rest} ref={ref}>
      <Typography as={'span'} variant={'subtitle2'}>
        {text}
      </Typography>
      {sort ? <ArrowUp className={s.icon} /> : <ArrowDown className={s.icon} />}
    </button>
  )
})

ButtonSort.displayName = 'ButtonSort'
