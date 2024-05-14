import { flashcardsApi } from '@/app/flash-cards-api'

export const cardApi = flashcardsApi.injectEndpoints({
  endpoints: () => ({}),
  // endpoints: builder => {
  //   return {
  //     getDecks: builder.query<any, void>({
  //       query: () => `v2/decks`,
  //     }),
  //   }
  // },
})

export const {} = cardApi
