import { Params, useParams, useSearchParams } from 'react-router-dom'

import { GetDeckByIdResponse, GetDeckCardsResponse } from '@/common/types'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/features/decks/api/decksApi'

export const useCardsList = () => {
  const params: Readonly<Params<string>> = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const {
    data: deckData,
    error: deckError,
    isLoading: isLoadingDeck,
  } = useGetDeckByIdQuery({ id: params?.id ?? '' })

  const deck = deckData as GetDeckByIdResponse

  const isMy = deck?.userId === deck?.id

  console.log(params?.id === deck?.id)

  const {
    data: cardsData,
    error: cardsError,
    isLoading: isLoadingCards,
  } = useGetDeckCardsQuery({ id: params?.id ?? '' })

  const cards = cardsData as GetDeckCardsResponse
  const searchChangeHandle = (value: string) => {
    if (value.length) {
      searchParams.set('name', value)
    } else {
      searchParams.delete('name')
    }
    setSearchParams(searchParams)
  }
  const onSortLastUpdated = () => {}

  return {
    cards,
    cardsError,
    deck,
    deckError,
    isLoadingCards,
    isLoadingDeck,
    isMy,
    onSortLastUpdated,
    searchChangeHandle,
    searchParams,
  }
}
