import { createApi } from '@reduxjs/toolkit/query/react'

import { baseQueryWithRefreshToken } from './BaseQueryWithRefreshToken'

export const appApi = createApi({
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  reducerPath: 'appApi',
  tagTypes: ['Auth', 'Cards', 'CardForLearn', 'Deck', 'Decks', 'DecksMinMaxCards', 'Me'],
})
