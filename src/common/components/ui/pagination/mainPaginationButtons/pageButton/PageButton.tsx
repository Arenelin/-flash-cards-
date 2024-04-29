import classNames from 'classnames'

import s from './pageButton.module.scss'

type Props = {
  isSelected: boolean
  onClick: () => void
  page: number
}
export const PageButton = (props: Props) => {
  const { isSelected, onClick, page } = props
  const baseStyle = classNames(s.default, isSelected ? s.selected : '')

  return (
    <button className={baseStyle} onClick={onClick}>
      {page}
    </button>
  )
}
