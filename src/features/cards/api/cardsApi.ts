import { appApi } from '@/app/api/appApi'
import { GetCardsById } from '@/common/types'

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
    }
  },
})

export const { useDeleteCardMutation } = cardsApi
