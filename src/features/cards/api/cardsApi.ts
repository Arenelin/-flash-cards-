import { appApi } from '@/app/api/appApi'
import { CardId, CardUpdateArgs, CardUpdateCreateResponse } from '@/common/types'
import { Card, NextCard } from '@/common/types'
export const cardsApi = appApi.injectEndpoints({
  endpoints: builder => {
    return {
      deleteCard: builder.mutation<undefined, CardId>({
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

      saveGradeOfCard: builder.mutation<Card, NextCard>({
        query: ({ cardId, deckId, grade }) => ({
          body: { cardId, grade },
          method: 'POST',
          url: `v1/decks/${deckId}/learn`,
        }),
      }),
      updateCard: builder.mutation<CardUpdateCreateResponse, CardUpdateArgs>({
        invalidatesTags: ['Cards', 'Deck'],
        query: ({ answer, answerImg, id, question, questionImg }) => {
          const formData = new FormData()

          if (answer) {
            formData.append('answer', answer)
          }
          if (answerImg) {
            debugger
            formData.append('answerImg', answerImg)
          } else if (answerImg === null) {
            formData.append('answerImg', '')
          }
          if (question) {
            formData.append('question', question)
          }
          if (questionImg) {
            formData.append('questionImg', questionImg)
          } else if (questionImg === null) {
            formData.append('questionImg', '')
          }

          return {
            body: formData,
            method: 'PATCH',
            url: `v1/cards/${id}`,
          }
        },
      }),
    }
  },
})

export const {
  useDeleteCardMutation,
  useGetCardForLearnQuery,
  useSaveGradeOfCardMutation,
  useUpdateCardMutation,
} = cardsApi
