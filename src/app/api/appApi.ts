import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: 'https://api.flashcards.andrii.es',
      prepareHeaders: headers => {
        const token = localStorage.getItem('accessToken')

        if (token) {
          headers.set('Authorization', `Bearer ${token}`)
        }

        return headers
      },
    }),
    { maxRetries: 1 }
  ),
  endpoints: () => ({}),
  reducerPath: 'appApi',
  tagTypes: ['Auth', 'Card', 'Decks', 'DecksMinMaxCards', 'Me'],
})
