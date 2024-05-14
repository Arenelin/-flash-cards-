import { appApi } from '@/app/api/appApi'
import {
  CreateDecksArgs,
  DecksResponse,
  DeleteDecksArgs,
  GetDecksArgs,
  GetDecksResponse,
  UpdateDecksArgs,
} from '@/common/types'

export const decksApi = appApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDecks: builder.mutation<DecksResponse, CreateDecksArgs>({
        invalidatesTags: ['Decks'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),
      deleteDecks: builder.mutation<Omit<DecksResponse, 'author'>, DeleteDecksArgs>({
        invalidatesTags: ['Decks'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),
      getDecks: builder.query<GetDecksResponse, GetDecksArgs | void>({
        providesTags: ['Decks'],
        query: args => ({
          method: 'GET',
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),
      updateDecks: builder.mutation<DecksResponse, UpdateDecksArgs>({
        invalidatesTags: ['Decks'],
        query: ({ id, ...body }) => ({
          body,
          method: 'PATCH',
          url: `v1/decks/${id}`,
        }),
      }),
    }
  },
})

export const {
  useCreateDecksMutation,
  useDeleteDecksMutation,
  useGetDecksQuery,
  useUpdateDecksMutation,
} = decksApi
