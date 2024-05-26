import { appApi } from '@/app/api/appApi'
import { CardItem, GetCardsById, NextCard } from '@/common/types'

export const cardsApi = appApi.injectEndpoints({
  endpoints: builder => {
    return {
      deleteCard: builder.mutation<undefined, GetCardsById>({
        invalidatesTags: ['Cards', 'Deck'],
        query: ({ id }) => ({
          method: 'DELETE',
          url: `v1/cards/${id}`,
        }),
      }),

      getCardForLearn: builder.query<CardItem, { id: string }>({
        providesTags: ['CardForLearn'],
        query: ({ id }) => ({
          url: `v1/decks/${id}/learn`,
        }),
      }),
      saveGradeOfCard: builder.mutation<CardItem, NextCard>({
        query: ({ cardId, deckId, grade }) => ({
          body: { cardId, grade },
          method: 'POST',
          url: `v1/decks/${deckId}/learn`,
        }),
      }),
    }
  },
})

export const { useDeleteCardMutation, useGetCardForLearnQuery, useSaveGradeOfCardMutation } =
  cardsApi
