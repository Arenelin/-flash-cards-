import { useState } from 'react'

export const useStoryButtonSort = () => {
  const [sort, setSort] = useState<'asc' | 'desc'>('asc')
  const onSort = (sort: 'asc' | 'desc', text: string) => {
    if (sort === 'asc') {
      setSort('desc')
    } else {
      setSort('asc')
    }
    alert(`Logic sort ${sort} ${text}`)
  }

  return { onSort, sort }
}
