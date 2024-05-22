import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
  }),
  endpoints: () => ({}),
  reducerPath: 'appApi',
  tagTypes: ['Decks', 'Card', 'Auth'],
})
