import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Tab } from '@/common/components'
import { ErrorResponse, GetDecksMinMaxCardsResponse, Sort } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import { useGetDecksMinMaxCardsQuery, useGetDecksQuery } from '@/features/decks/api/decksApi'

export const useDecksList = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sort, setSort] = useState<Sort>(null)

  const clearFilterHandle = () => {
    setSort(null)
    setSearchParams({})
  }
  const { data: me, isError: isErrorMe } = useGetMeQuery()

  const {
    data: getDecksMinMaxCardsData,
    error: getDecksMinMaxCardsError,
    isLoading: getDecksMinMaxCardsIsLoading,
  } = useGetDecksMinMaxCardsQuery()

  const minCardsCount = (getDecksMinMaxCardsData as GetDecksMinMaxCardsResponse)?.min || 0
  const maxCardsCount = (getDecksMinMaxCardsData as GetDecksMinMaxCardsResponse)?.max || 100

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
      searchParams.set('authorId', me?.id || '')
    } else {
      searchParams.delete('authorId')
    }
    setSearchParams(searchParams)
  }
  //slider search params
  const sliderValueHandle = (value: number[]) => {
    searchParams.set('minCardsCount', value[0].toString())
    searchParams.set('maxCardsCount', value[1].toString())
    value[0] === minCardsCount && searchParams.delete('minCardsCount')
    value[1] === maxCardsCount && searchParams.delete('maxCardsCount')
    setSearchParams(searchParams)
  }
  const sortedString = useMemo(() => {
    if (!sort) {
      searchParams.delete(`orderBy`)
      setSearchParams(searchParams)

      return null
    }
    const orderBy = `${sort.key}-${sort.direction}`

    searchParams.set(`orderBy`, orderBy)
    setSearchParams(searchParams)

    return searchParams.get('orderBy')
  }, [searchParams, setSearchParams, sort])

  const onClearClick = () => {
    searchParams.delete('name')
    setSearchParams(searchParams)
  }

  const {
    data: getDecksData,
    error: getDecksError,
    isLoading: getDecksIsLoading,
  } = useGetDecksQuery(
    {
      authorId: searchParams.get('authorId') || undefined, // пока нет реального айди выкидывает ошибку
      currentPage: Number(searchParams.get('currentPage')) || 1,
      itemsPerPage: Number(searchParams.get('itemsPerPage')) || 10,
      maxCardsCount: Number(searchParams.get('maxCardsCount')) || maxCardsCount,
      minCardsCount: Number(searchParams.get('minCardsCount')) || minCardsCount,
      name: searchParams.get('name') || undefined,
      orderBy: sortedString || null,
    },
    { skip: getDecksMinMaxCardsIsLoading }
  )

  const decksData = getDecksData

  const totalError = [
    ...((getDecksMinMaxCardsError as ErrorResponse)?.data.errorMessages || []),
    ...((getDecksError as ErrorResponse)?.data.errorMessages || []),
  ]
  const decksError = totalError.length ? totalError : null

  const decksIsLoading = getDecksMinMaxCardsIsLoading || getDecksIsLoading

  return {
    clearFilterHandle,
    currentUserId: me?.id,
    decksData,
    decksError,
    decksIsLoading,
    isErrorMe,
    maxCardsCount,
    minCardsCount,
    onClearClick,
    searchChangeHandle,
    searchParams,
    setSort,
    sliderValueHandle,
    sort,
    tabsChangeHandler,
    tabsOptions,
  }
}
