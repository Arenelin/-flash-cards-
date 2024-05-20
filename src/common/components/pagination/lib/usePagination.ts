import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

import { PaginationProps } from '@/common/components'
import { Option } from '@/common/types'

// original code: https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/

const DOTS = '...'

export type PaginationRange = (number | string)[]
const range = (start: number, end: number) => {
  const length = end - start + 1

  /*  Create an array of certain length and set the elements within it from start value to end value. */
  return Array.from({ length }, (_, index) => index + start)
}

export const usePagination = ({ siblingCount = 1, totalCount }: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const itemsPerPage = searchParams.get('itemsPerPage') || '10'
  const currentPage: number = Number(searchParams.get('currentPage')) || 1
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
    setSearchParams(searchParams)
  }

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / +itemsPerPage)
    // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
    const totalPageNumbers = siblingCount + 5

    /* Case 1: If the number of pages is less than the page numbers we want to show in our
   paginationComponent, we return the range [1...totalPageCount] */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }
    // Calculate left and right sibling index and make sure they are within range 1 and totalPageCount

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount)

    /* We do not show dots just when there is just one page number to be inserted between the extremes of sibling and
    the page limits i.e 1 and totalPageCount.
    Hence, we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2 */
    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    // Case 2: No left dots to show, but rights dots to be shown

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)

      return [...leftRange, DOTS, totalPageCount]
    }

    // Case 3: No right dots to show, but left dots to be shown

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount)

      return [firstPageIndex, DOTS, ...rightRange]
    }

    // Case 4: Both left and right dots to be shown

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
