import { useSearchParams } from 'react-router-dom'

import { Tab } from '@/common/components'
import { useGetDecksQuery } from '@/features/decks/api/decksApi'

export const useDecksList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  //input search params
  const searchChangeHandle = (value: string) => {
    if (value.length) {
      searchParams.set('name', value)
    } else {
      searchParams.delete('name')
    }
    setSearchParams(searchParams)
  }
  //tabs search params
  const tabsOptions: Tab[] = [
    {
      disabled: false,
      text: 'My Cards',
      value: 'My Cards',
    },
    {
      disabled: false,
      text: 'All Cards',
      value: 'All Cards',
    },
  ]
  const tabsChangeHandler = (value: string) => {
    if (value === 'My Cards') {
      searchParams.set('authorId', 'My Cards') //TODO add id from me-request
    } else {
      searchParams.delete('authorId')
    }
    setSearchParams(searchParams)
  }
  //slider search params
  const sliderValueHandle = (value: number[]) => {
    searchParams.set('minCardsCount', value[0].toString())
    searchParams.set('maxCardsCount', value[1].toString())
    value[0] === 0 && searchParams.delete('minCardsCount')
    value[1] === 100 && searchParams.delete('maxCardsCount')
    setSearchParams(searchParams)
  }
  //pagination search params
  const pageSizeHandler = (itemsPerPage: string) => {
    searchParams.set('itemsPerPage', itemsPerPage)
    setSearchParams(searchParams)
  }
  const currentPageHandler = (currentPage: number) => {
    searchParams.set('currentPage', currentPage.toString())
    setSearchParams(searchParams)
  }

  const { data, error, isLoading } = useGetDecksQuery({
    authorId: searchParams.get('authorId') || undefined, // пока нет реального айди выкидывает ошибку
    currentPage: Number(searchParams.get('currentPage')) || 1,
    itemsPerPage: Number(searchParams.get('itemsPerPage')) || 10,
    maxCardsCount: Number(searchParams.get('maxCardsCount')) || 100,
    minCardsCount: Number(searchParams.get('minCardsCount')) || 0,
    name: searchParams.get('name') || undefined,
    // orderBy?: string,
  })

  const clearFilterHandle = () => {
    setSearchParams({})
  }

  return {
    clearFilterHandle,
    currentPageHandler,
    data,
    error,
    isLoading,
    pageSizeHandler,
    searchChangeHandle,
    searchParams,
    sliderValueHandle,
    tabsChangeHandler,
    tabsOptions,
  }
}
