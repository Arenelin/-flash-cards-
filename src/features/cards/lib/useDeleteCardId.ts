import { useState } from 'react'
import { toast } from 'react-toastify'

import { ErrorResponseField } from '@/common/types'
import { useDeleteCardMutation } from '@/features/cards/api/cardsApi'

export const useDeleteCardId = () => {
  const [dataDeleteCard, setDataDeleteCard] = useState<{ id: string; title: string }>()
  const [deleteModalCard, setDeleteModalCard] = useState<boolean>(false)

  const [deleteCard, { isLoading: isLoadingError }] = useDeleteCardMutation()

  const requestDeleteCard = async (id: string) => {
    try {
      await deleteCard({ id }).unwrap()
      toast.success('Card Delete')
    } catch (e) {
      const error = e as ErrorResponseField

      toast.error(error.data.message ?? 'Delete Card failed')
    } finally {
      setDeleteModalCard(false)
    }
  }

  return {
    dataDeleteCard,
    deleteModalCard,
    isLoadingError,
    requestDeleteCard,
    setDataDeleteCard,
    setDeleteModalCard,
  }
}
