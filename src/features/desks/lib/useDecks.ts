import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Tab } from '@/common/components/ui'
import { useGetDecksQuery } from '@/features/desks/api/decksApi'

export const useDecks = () => {
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
  const min = Number(searchParams.get('minCardsCount')) || 0
  const max = Number(searchParams.get('maxCardsCount')) || 100

  const [sliderValue, setSliderValue] = useState([min, max])

  useEffect(() => {
    searchParams.set('minCardsCount', sliderValue[0].toString())
    searchParams.set('maxCardsCount', sliderValue[1].toString())
    sliderValue[0] === 0 && searchParams.delete('minCardsCount')
    sliderValue[1] === 100 && searchParams.delete('maxCardsCount')
    setSearchParams(searchParams)
  }, [sliderValue, searchParams, setSearchParams])
  //pagination search params
  const pageSizeHandler = (itemsPerPage: string) => {
    searchParams.set('itemsPerPage', itemsPerPage)
    setSearchParams(searchParams)
  }
  const currentPageHandler = (currentPage: number) => {
    searchParams.set('currentPage', currentPage.toString())
    setSearchParams(searchParams)
  }

  // const { data, error, isLoading } = useGetDecksQuery({
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
    setSliderValue([0, 100])
    searchParams.delete('authorId')
    searchParams.delete('name')
    searchParams.delete('currentPage')
    // searchParams.delete('orderBy')
    setSearchParams(searchParams)
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
    setSliderValue,
    sliderValue,
    tabsChangeHandler,
    tabsOptions,
  }
}
