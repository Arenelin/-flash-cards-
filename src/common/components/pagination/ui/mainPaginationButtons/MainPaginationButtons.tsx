import { ElementRef, forwardRef } from 'react'

import { PaginationRange } from '@/common/components/pagination/lib/usePagination'
import { Dots } from '@/common/components/pagination/ui/dots/Dots'
import { PageButton } from '@/common/components/pagination/ui/pageButton/PageButton'

type Props = {
  currentPage: number
  onCurrentPageChange: (page: number) => void
  paginationRange: PaginationRange
}

export const MainPaginationButtons = forwardRef<ElementRef<'button'> & ElementRef<'span'>, Props>(
  (props, ref) => {
    const { currentPage, onCurrentPageChange, paginationRange } = props
    const paginationButtons = paginationRange.map((page, index) => {
      if (typeof page === 'string') {
        return <Dots key={index} ref={ref} />
      }

      return (
        <PageButton
          isSelected={currentPage === page}
          key={index}
          onClick={() => onCurrentPageChange(page)}
          page={page}
          ref={ref}
        />
      )
    })

    return <>{paginationButtons}</>
  }
)

MainPaginationButtons.displayName = 'MainPaginationButtons'
