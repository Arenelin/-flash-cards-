import { appApi } from '@/app/api/appApi'
import { Card, GetCardsById } from '@/common/types'

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

      getCardForLearn: builder.query<Card, { id: string }>({
        providesTags: ['CardForLearn'],
        query: ({ id }) => ({
          url: `v1/decks/${id}/learn`,
        }),
      }),
      saveGradeOfCard: builder.mutation<Card, { cardId: string; grade: number; id: string }>({
        query: ({ cardId, grade, id }) => ({
          method: 'POST',
          params: { cardId, grade },
          url: `v1/decks/${id}/learn`,
        }),
      }),
    }
  },
})

export const { useDeleteCardMutation, useGetCardForLearnQuery, useSaveGradeOfCardMutation } =
  cardsApi
