import { flashcardsApi } from '@/app/flash-cards-api'

export const authApi = flashcardsApi.injectEndpoints({
  endpoints: () => ({}),
  // endpoints: builder => {
  //   return {
  //     getDecks: builder.query<any, void>({
  //       query: () => `v2/decks`,
  //     }),
  //   }
  // },
})

export const {} = authApi
