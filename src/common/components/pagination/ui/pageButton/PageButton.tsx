import { forwardRef } from 'react'

import classNames from 'classnames'

import s from '@/common/components/pagination/ui/pageButton/pageButton.module.scss'

type Props = {
  isSelected: boolean
  onClick: () => void
  page: number
}
export const PageButton = forwardRef<HTMLButtonElement, Props>(
  ({ isSelected, onClick, page }, ref) => {
    return (
      <button
        className={classNames(s.default, isSelected ? s.selected : '')}
        onClick={onClick}
        ref={ref}
      >
        {page}
      </button>
    )
  }
)

PageButton.displayName = 'PageButton'
