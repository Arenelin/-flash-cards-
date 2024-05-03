import { PaginationProps } from '@/common/components'
import { Dots } from '@/common/components/ui/pagination/dots/Dots'
import { PageButton } from '@/common/components/ui/pagination/mainPaginationButtons/pageButton/PageButton'
import { PaginationRange } from '@/common/components/ui/pagination/usePagination'

type Props = { paginationRange: PaginationRange } & Omit<
  PaginationProps,
  'siblingCount' | 'totalPageCount'
>
export const MainPaginationButtons = (props: Props) => {
  const { currentPage, onPageChange, paginationRange } = props
  const paginationButtons = paginationRange.map((page, index) => {
    if (typeof page === 'string') {
      return <Dots key={index} />
    }

    return (
      <PageButton
        isSelected={currentPage === page}
        key={index}
        onClick={() => onPageChange(page)}
        page={page}
      />
    )
  })

  return <>{paginationButtons}</>
}
