import { Params, useParams, useSearchParams } from 'react-router-dom'

import { Deck, GetDeckCardsResponse, MeResponse } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import { useGetDeckByIdQuery, useGetDeckCardsQuery } from '@/features/decks/api/decksApi'

export const useCardsList = () => {
  const params: Readonly<Params<string>> = useParams()
  const [searchParams, setSearchParams] = useSearchParams()

  const { data: meData } = useGetMeQuery()

  const {
    data: deckData,
    error: deckError,
    isLoading: isLoadingDeck,
  } = useGetDeckByIdQuery({ id: params.id ?? '' })

  const deck = deckData as Omit<Deck, 'author'>
  const isMy = deck?.userId === (meData as MeResponse)?.id

  const {
    data: cardsData,
    error: cardsError,
    isLoading: isLoadingCards,
  } = useGetDeckCardsQuery({ id: deck?.id })

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
