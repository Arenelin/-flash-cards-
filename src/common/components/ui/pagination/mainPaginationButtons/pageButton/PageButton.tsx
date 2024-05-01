import classNames from 'classnames'

import s from './pageButton.module.scss'

type Props = {
  isSelected: boolean
  onClick: () => void
  page: number
}
export const PageButton = (props: Props) => {
  const { isSelected, onClick, page } = props

  return (
    <button className={classNames(s.default, isSelected ? s.selected : '')} onClick={onClick}>
      {page}
    </button>
  )
}
