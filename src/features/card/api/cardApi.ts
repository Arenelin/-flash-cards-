import { appApi } from '@/app/api/appApi'

export const cardApi = appApi.injectEndpoints({
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
