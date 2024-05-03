import ArrowBack from '@/assets/icons/ArrowBack'
import ArrowForward from '@/assets/icons/ArrowForward'
import { ButtonArrow } from '@/common/components/ui/pagination/buttonArrow/ButtonArrow'
import { MainPaginationButtons } from '@/common/components/ui/pagination/mainPaginationButtons/MainPaginationButtons'

import s from './pagination.module.scss'

import { usePagination } from './usePagination'

export type PaginationProps = {
  currentPage: number
  onPageChange: (page: number) => void
  siblingCount?: number
  totalPageCount: number
}

export const Pagination = (props: PaginationProps) => {
  const { currentPage, onPageChange, siblingCount = 1, totalPageCount } = props

  const { isFirstPage, isLastPage, onNextPage, onPreviousPage, paginationRange } = usePagination({
    currentPage,
    onPageChange,
    siblingCount,
    totalPageCount,
  })

  return (
    <div className={s.container}>
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
    </div>
  )
}
