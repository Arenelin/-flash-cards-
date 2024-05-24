import { useState } from 'react'

import { useDeleteCardMutation } from '@/features/cards/api/cardsApi'

export const useDeleteCardId = () => {
  const [dataTableDelete, setDataTableDelete] = useState<{ id: string; title: string }>()

  const [
    deleteCard,
    { error: errorDelete, isLoading: isLoadingDelete, isSuccess: isSuccessError },
  ] = useDeleteCardMutation()

  const requestDeletion = () => {
    if (dataTableDelete?.id) {
      deleteCard({ id: dataTableDelete?.id })
    }
  }

  return {
    dataTableDelete,
    errorDelete,
    isLoadingDelete,
    isSuccessError,
    requestDeletion,
    setDataTableDelete,
  }
}
