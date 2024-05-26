import { appApi } from '@/app/api/appApi'
import { CardItem, GetCardsById } from '@/common/types'

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
      saveGradeOfCard: builder.mutation<
        CardItem,
        { cardId: string; deckId: string; grade: number }
      >({
        query: ({ cardId, deckId, grade }) => ({
          method: 'POST',
          params: { cardId, grade },
          url: `v1/decks/${deckId}/learn`,
        }),
      }),
    }
  },
})

export const { useDeleteCardMutation, useGetCardForLearnQuery, useSaveGradeOfCardMutation } =
  cardsApi
