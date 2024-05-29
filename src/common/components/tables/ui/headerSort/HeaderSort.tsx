import { ComponentPropsWithoutRef } from 'react'

import { ArrowDown, ArrowUp } from '@/assets/icons'
import { Th, Thead, Tr } from '@/common/components'
import { Column, Sort } from '@/common/types'

import s from './headerSort.module.scss'

export type Props = {
  columns: Column[]
  onSort?: (sort: Sort) => void
  sort?: Sort
} & ComponentPropsWithoutRef<'thead'>
type HeaderSortProps = Omit<Props, 'children'>
export const HeaderSort = ({ columns, onSort, sort, ...rest }: HeaderSortProps) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || !sortable) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ direction: 'asc', key })
    }

    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
      key,
    })
  }

  return (
    <Thead {...rest}>
      <Tr>
        {columns.map(({ key, sortable, title }) => (
          <Th key={key} onClick={handleSort(key, sortable)}>
            <button className={s.button}>
              {title}
              {sort && sort.key === key && (
                <span>
                  {sort.direction === 'asc' ? (
                    <ArrowUp className={s.icon} />
                  ) : (
                    <ArrowDown className={s.icon} />
                  )}
                </span>
              )}
            </button>
          </Th>
        ))}
      </Tr>
    </Thead>
  )
}
