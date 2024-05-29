import { useMemo, useState } from 'react'
import { Params, useParams, useSearchParams } from 'react-router-dom'

import { useDebounce } from '@/common/hooks/useDebounce'
import { Sort } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/features/decks/api/decksApi'

export const useCardsList = () => {
  const params: Readonly<Params<string>> = useParams()
  const [sort, setSort] = useState<Sort>(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const debouncedSearch = useDebounce(searchParams, 500)

  const { data: me } = useGetMeQuery()

  const {
    data: deckData,
    error: deckError,
    isLoading: isLoadingDeck,
  } = useGetDeckByIdQuery({ id: params?.id ?? '' })

  const deck = deckData

  const isMy = me?.id === deck?.userId
  const searchChangeHandle = (value: string) => {
    if (value.length) {
      searchParams.set('question', value)
    } else {
      searchParams.delete('question')
    }
    setSearchParams(searchParams)
  }
  const onClearClick = () => {
    searchParams.delete('question')
    setSearchParams(searchParams)
  }
  const pageSizeHandler = (itemsPerPage: string) => {
    searchParams.set('itemsPerPage', itemsPerPage)
    setSearchParams(searchParams)
  }
  const currentPageHandler = (currentPage: number) => {
    searchParams.set('currentPage', currentPage.toString())
    setSearchParams(searchParams)
  }
  const sortedString = useMemo(() => {
    if (!sort) {
      return null
    }

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const {
    data: cardsData,
    error: cardsError,
    isLoading: isLoadingCards,
  } = useGetDeckCardsQuery({
    currentPage: Number(searchParams.get('currentPage')) || 1,
    id: params?.id ?? '',
    itemsPerPage: Number(searchParams.get('itemsPerPage') || 10),
    orderBy: sortedString || undefined,
    question: debouncedSearch.get('question') || undefined,
  })

  const cards = cardsData

  return {
    cards,
    cardsError,
    currentPageHandler,
    deck,
    deckError,
    isLoadingCards,
    isLoadingDeck,
    isMy,
    onClearClick,
    pageSizeHandler,
    searchChangeHandle,
    searchParams,
    setSort,
    sort,
  }
}
