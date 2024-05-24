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
  // endpoints: builder => {
  //   return {
  //         getMe: builder.query<MeError | MeResponse, void>({
  //           providesTags: ['Me'],
  //           query: () => 'v1/auth/me',
  //       }),
  //     getDecks: builder.query<ErrorResponse | GetDecksResponse, GetDecks | void>({
  //       providesTags: ['Decks'],
  //       query: args => ({
  //         params: args ?? undefined,
  //         url: `v2/decks`,
  //       }),
  //     }),
  //
  //     getDecksMinMaxCards: builder.query<ErrorResponse | GetDecksMinMaxCardsResponse, void>({
  //       providesTags: ['DecksMinMaxCards'],
  //       query: () => ({
  //         url: `v2/decks/min-max-cards`,
  //       }),
  //     }),
  //   }
  // },
  reducerPath: 'appApi',
  tagTypes: ['Auth', 'Card', 'Decks', 'DecksMinMaxCards', 'Me'],
})
// export const {
//   useGetMeQuery,
//   useGetDecksMinMaxCardsQuery,
//   useGetDecksQuery,
// } = appApi
