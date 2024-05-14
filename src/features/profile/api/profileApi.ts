import { appApi } from '@/app/api/appApi'

export const profileApi = appApi.injectEndpoints({
  endpoints: () => ({}),
  // endpoints: builder => {
  //   return {
  //     getDecks: builder.query<any, void>({
  //       query: () => `v2/decks`,
  //     }),
  //   }
  // },
})

export const {} = profileApi
