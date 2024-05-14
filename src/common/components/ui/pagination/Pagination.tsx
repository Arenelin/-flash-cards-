import { ElementRef, forwardRef } from 'react'

import ArrowBack from '@/assets/icons/ArrowBack'
import ArrowForward from '@/assets/icons/ArrowForward'
import { Select, Typography } from '@/common/components/ui'
import { usePagination } from '@/common/components/ui/pagination/lib/usePagination'
import { ButtonArrow } from '@/common/components/ui/pagination/ui/buttonArrow/ButtonArrow'
import { MainPaginationButtons } from '@/common/components/ui/pagination/ui/mainPaginationButtons/MainPaginationButtons'

import s from './pagination.module.scss'

export type PaginationProps = {
  currentPage: number
  onPageChange: (page: number) => void
  siblingCount?: number
  totalCount: number
}

export const Pagination = forwardRef<ElementRef<'div'>, PaginationProps>((props, ref) => {
  const { currentPage, onPageChange, siblingCount = 1, totalCount } = props

  const {
    isFirstPage,
    isLastPage,
    onNextPage,
    onPageSizeChange,
    onPreviousPage,
    options,
    pageSize,
    paginationRange,
  } = usePagination({ currentPage, onPageChange, siblingCount, totalCount })

  return (
    <div className={s.container} ref={ref}>
      <ButtonArrow disabled={isFirstPage} onClick={onPreviousPage}>
        <ArrowBack />
      </ButtonArrow>
      <MainPaginationButtons
        currentPage={currentPage}
        onPageChange={onPageChange}
        paginationRange={paginationRange}
      />
      <ButtonArrow disabled={isLastPage} onClick={onNextPage}>
        <ArrowForward />
      </ButtonArrow>
      <div className={s.selectBlock}>
        <Typography variant={'body2'}>Show&nbsp;</Typography>
        <Select onValueChange={onPageSizeChange} options={options} small value={pageSize} />
        <Typography variant={'body2'}>&nbsp;&nbsp;&nbsp;&nbsp;on the page</Typography>
      </div>
    </div>
  )
})

Pagination.displayName = 'Pagination'
