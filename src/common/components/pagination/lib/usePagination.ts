import { useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { PaginationProps } from '@/common/components'
import { Option } from '@/common/types'

// original code: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

const DOTS = '...'

export type PaginationRange = (number | string)[]
const range = (start: number, end: number) => {
  const length = end - start + 1

  return Array.from({ length }, (_, index) => index + start)
}

export const usePagination = ({ siblingCount = 1, totalCount = 0 }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const itemsPerPage = searchParams.get('itemsPerPage') || '10'
  const currentPage = Number(searchParams.get('currentPage')) || 1

  useEffect(() => {
    searchParams.delete('currentPage')
    setSearchParams(searchParams)
  }, [
    searchParams.get('name'),
    searchParams.get('minCardsCount'),
    searchParams.get('maxCardsCount'),
    searchParams.get('orderBy'),
    searchParams.get('authorId'),
  ])

  const options: Option[] = [
    { label: '10', value: '10' },
    { label: '20', value: '20' },
    { label: '30', value: '30' },
    { label: '50', value: '50' },
    { label: '100', value: '100' },
  ]
  const itemsPerPageChangeHandler = (itemsPerPage: string) => {
    searchParams.set('itemsPerPage', itemsPerPage)
    searchParams.delete('currentPage')
    itemsPerPage === '10' && searchParams.delete('itemsPerPage')
    setSearchParams(searchParams)
  }
  const onCurrentPageChange = (page: number) => {
    searchParams.set('currentPage', page.toString())
    page === 1 && searchParams.delete('currentPage')
    setSearchParams(searchParams)
  }

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / +itemsPerPage)
    const totalPageNumbers = siblingCount + 5

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)

      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
    }
  }, [siblingCount, currentPage, itemsPerPage, totalCount]) as PaginationRange

  const isLastPage = currentPage === paginationRange.at(-1)
  const isFirstPage = currentPage === 1
  const onNextPage = () => {
    onCurrentPageChange(currentPage + 1)
  }
  const onPreviousPage = () => {
    onCurrentPageChange(currentPage - 1)
  }

  return {
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
  }
}
