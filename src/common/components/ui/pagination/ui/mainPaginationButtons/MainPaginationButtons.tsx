import { ElementRef, forwardRef } from 'react'

import { PaginationProps } from '@/common/components/ui'
import { PaginationRange } from '@/common/components/ui/pagination/lib/usePagination'
import { Dots } from '@/common/components/ui/pagination/ui/dots/Dots'
import { PageButton } from '@/common/components/ui/pagination/ui/pageButton/PageButton'

type Props = { paginationRange: PaginationRange } & Omit<
  PaginationProps,
  'siblingCount' | 'totalCount'
>
export const MainPaginationButtons = forwardRef<ElementRef<'button'> & ElementRef<'span'>, Props>(
  (props, ref) => {
    const { currentPage, onPageChange, paginationRange } = props
    const paginationButtons = paginationRange.map((page, index) => {
      if (typeof page === 'string') {
        return <Dots key={index} ref={ref} />
      }

      return (
        <PageButton
          isSelected={currentPage === page}
          key={index}
          onClick={() => onPageChange(page)}
          page={page}
          ref={ref}
        />
      )
    })

    return <>{paginationButtons}</>
  }
)

MainPaginationButtons.displayName = 'MainPaginationButtons'
