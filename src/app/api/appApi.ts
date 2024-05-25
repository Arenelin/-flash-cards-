// import {
//   ErrorResponse,
//   GetDecks,
//   GetDecksMinMaxCardsResponse,
//   GetDecksResponse,
// } from '@/common/types'
import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithRefreshToken } from './BaseQueryWithRefreshToken'

export const appApi = createApi({
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  reducerPath: 'appApi',
  tagTypes: ['Auth', 'Decks', 'DecksMinMaxCards', 'Me', 'Cards', 'Deck'],
})
