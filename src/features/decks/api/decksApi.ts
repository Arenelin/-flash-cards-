import { appApi } from '@/app/api/appApi'
import {
  CardCreateArgs,
  CardUpdateCreateResponse,
  CreateDecksArgs,
  Deck,
  DeleteDecksArgs,
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
      createCard: builder.mutation<CardUpdateCreateResponse, CardCreateArgs>({
        invalidatesTags: ['Deck', 'Cards'],
        query: ({ answer, answerImg, id, question, questionImg }) => {
          const formData = new FormData()

          if (answer) {
            formData.append('answer', answer)
          }
          if (answerImg) {
            formData.append('answerImg', answerImg)
          }
          if (question) {
            formData.append('question', question)
          }
          if (questionImg) {
            formData.append('questionImg', questionImg)
          }

          return { body: formData, method: 'POST', url: `v1/decks/${id}/cards` }
        },
      }),

      createDeck: builder.mutation<Deck, CreateDecksArgs>({
        invalidatesTags: ['Decks', 'DecksMinMaxCards'],
        query: ({ cover, isPrivate, name }) => {
          const formData = new FormData()

          if (name) {
            formData.append('name', name)
          }
          if (isPrivate) {
            formData.append('isPrivate', isPrivate.toString())
          }
          if (cover) {
            formData.append('cover', cover)
          }

          return {
            body: formData,
            method: 'POST',
            url: `v1/decks`,
          }
        },
      }),

      deleteDeck: builder.mutation<Omit<Deck, 'author'>, DeleteDecksArgs>({
        invalidatesTags: ['Decks', 'DecksMinMaxCards'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/decks/${id}`,
        }),
      }),

      getDeckById: builder.query<Omit<Deck, 'author'>, GetDeckById>({
        providesTags: ['Deck'],
        query: ({ id }) => ({
          url: `v1/decks/${id}`,
        }),
      }),

      getDeckCards: builder.query<GetDeckCardsResponse, GetDeckCards>({
        providesTags: ['Cards'],
        query: ({ id, ...params }) => ({
          params: params,
          url: `v1/decks/${id}/cards`,
        }),
      }),

      getDecks: builder.query<GetDecksResponse, GetDecks>({
        providesTags: ['Decks'],
        query: args => ({
          params: args ?? undefined,
          url: `v2/decks`,
        }),
      }),

      getDecksMinMaxCards: builder.query<GetDecksMinMaxCardsResponse, void>({
        providesTags: ['DecksMinMaxCards'],
        query: () => ({
          url: `v2/decks/min-max-cards`,
        }),
      }),
      updateDeck: builder.mutation<Omit<Deck, 'author'>, UpdateDecksArgs>({
        invalidatesTags: ['Decks', 'DecksMinMaxCards', 'Deck'],
        query: ({ cover, id, isPrivate, name }) => {
          const formData = new FormData()

          if (name) {
            formData.append('name', name)
          }
          if (isPrivate !== undefined) {
            formData.append('isPrivate', isPrivate.toString())
          }
          if (cover) {
            formData.append('cover', cover)
          } else if (cover === null) {
            formData.append('cover', '')
          }

          return { body: formData, method: 'PATCH', url: `v1/decks/${id}` }
        },
      }),
    }
  },
})

export const {
  useCreateCardMutation,
  useCreateDeckMutation,
  useDeleteDeckMutation,
  useGetDeckByIdQuery,
  useGetDeckCardsQuery,
  useGetDecksMinMaxCardsQuery,
  useGetDecksQuery,
  useUpdateDeckMutation,
} = decksApi
