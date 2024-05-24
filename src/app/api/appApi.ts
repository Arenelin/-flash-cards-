import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithRefreshToken } from './BaseQueryWithRefreshToken'

export const appApi = createApi({
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  // endpoints: builder => {
  //   return {
  //     getMe: builder.query<MeError | MeResponse, void>({
  //       providesTags: ['Me'],
  //       query: () => 'v1/auth/me',
  //     }),
  //   }
  // },
  reducerPath: 'appApi',
  tagTypes: ['Auth', 'Card', 'Decks', 'DecksMinMaxCards', 'Me'],
})
// export const { useGetMeQuery } = appApi
