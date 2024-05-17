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
  itemsPerPage: string
  onCurrentPageChange: (page: number) => void
  onPageSizeChange: (pageSize: string) => void
  siblingCount?: number
  totalCount: number
}

export const Pagination = forwardRef<ElementRef<'div'>, PaginationProps>(
  (
    { currentPage, itemsPerPage, onCurrentPageChange, onPageSizeChange, siblingCount, totalCount },
    ref
  ) => {
    const {
      isFirstPage,
      isLastPage,
      onNextPage,
      onPreviousPage,
      options,
      pageSize,
      pageSizeChangeHandler,
      paginationRange,
    } = usePagination({
      currentPage,
      itemsPerPage,
      onCurrentPageChange,
      onPageSizeChange,
      siblingCount,
      totalCount,
    })

    return (
      <div className={s.container} ref={ref}>
        <ButtonArrow disabled={isFirstPage} onClick={onPreviousPage}>
          <ArrowBack />
        </ButtonArrow>
        <MainPaginationButtons
          currentPage={currentPage}
          onCurrentPageChange={onCurrentPageChange}
          paginationRange={paginationRange}
        />
        <ButtonArrow disabled={isLastPage} onClick={onNextPage}>
          <ArrowForward />
        </ButtonArrow>
        <div className={s.selectBlock}>
          <Typography variant={'body2'}>Show&nbsp;</Typography>
          <Select onValueChange={pageSizeChangeHandler} options={options} small value={pageSize} />
          <Typography variant={'body2'}>&nbsp;&nbsp;&nbsp;on the page</Typography>
        </div>
      </div>
    )
  }
)

Pagination.displayName = 'Pagination'
