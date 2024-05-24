import { appApi } from '@/app/api/appApi'
import {
  CreateDecksArgs,
  Deck,
  DeleteDecksArgs,
  ErrorResponse,
  GetDeckById,
  GetDeckCards,
  GetDeckCardsResponse,
  GetDecks,
  GetDecksMinMaxCardsResponse,
  GetDecksResponse,
  UpdateDecksArgs,
} from '@/common/types'

export const decksApi = appApi.injectEndpoints({
  endpoints: builder => {
    return {
      createDeck: builder.mutation<Deck, CreateDecksArgs>({
        invalidatesTags: ['Decks', 'DecksMinMaxCards'],
        query: args => ({
          body: args,
          method: 'POST',
          url: `v1/decks`,
        }),
      }),

      deleteDeck: builder.mutation<Omit<Deck, 'author'>, DeleteDecksArgs>({
        invalidatesTags: ['Decks', 'DecksMinMaxCards'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),

      getDeckById: builder.query<ErrorResponse | Omit<Deck, 'author'>, GetDeckById>({
        providesTags: ['Decks'],
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
        }),
      }),

      getDeckCards: builder.query<ErrorResponse | GetDeckCardsResponse, GetDeckCards>({
        providesTags: ['Decks'],
        query: ({ id }) => ({
          url: `v1/decks/${id}/cards`,
        }),
      }),

      getDecks: builder.query<ErrorResponse | GetDecksResponse, GetDecks | void>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),

      getDecksMinMaxCards: builder.query<ErrorResponse | GetDecksMinMaxCardsResponse, void>({
        providesTags: ['DecksMinMaxCards'],
        query: () => ({
          url: `v2/decks/min-max-cards`,
        }),
      }),

      updateDeck: builder.mutation<Omit<Deck, 'author'>, UpdateDecksArgs>({
        invalidatesTags: ['Decks', 'DecksMinMaxCards'],
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
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDeckCardsQuery,
  useGetDecksMinMaxCardsQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksApi
