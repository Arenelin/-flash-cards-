import { ElementRef, forwardRef } from 'react'

import ArrowBack from '@/assets/icons/ArrowBack'
import ArrowForward from '@/assets/icons/ArrowForward'
import { Select, Typography } from '@/common/components'
import { usePagination } from '@/common/components/pagination/lib/usePagination'
import { ButtonArrow } from '@/common/components/pagination/ui/buttonArrow/ButtonArrow'
import { MainPaginationButtons } from '@/common/components/pagination/ui/mainPaginationButtons/MainPaginationButtons'

import s from './pagination.module.scss'

export type PaginationProps = {
  siblingCount?: number
  totalCount: number
}

export const Pagination = forwardRef<ElementRef<'div'>, PaginationProps>(
  ({ siblingCount, totalCount }, ref) => {
    const {
      currentPage,
      isFirstPage,
      isLastPage,
      itemsPerPage,
      itemsPerPageChangeHandler,
      onCurrentPageChange,
      onNextPage,
      onPreviousPage,
      options,
      paginationRange,
    } = usePagination({ siblingCount, totalCount })

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
          <Select
            onValueChange={itemsPerPageChangeHandler}
            options={options}
            small
            value={itemsPerPage}
          />
          <Typography variant={'body2'}>&nbsp;&nbsp;&nbsp;on the page</Typography>
        </div>
      </div>
    )
  }
)

Pagination.displayName = 'Pagination'
