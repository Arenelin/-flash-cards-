import { useState } from 'react'
import { toast } from 'react-toastify'

import { ErrorResponseCard } from '@/common/types'
import { useDeleteCardMutation } from '@/features/cards/api/cardsApi'

export const useDeleteCardId = () => {
  const [dataTableDelete, setDataTableDelete] = useState<{ id: string; title: string }>()
  const [deleteModal, setDeleteModal] = useState<boolean>(false)

  const [deleteCard, { isLoading: isLoadingError }] = useDeleteCardMutation()

  //Нуже ли тут запрос до открытия модального окна чтобы проверить существует ли карточка
  const requestDeletion = async () => {
    if (dataTableDelete?.id) {
      try {
        await deleteCard({ id: dataTableDelete?.id }).unwrap()
        toast.success('Card Delete')
      } catch (e) {
        const error = e as ErrorResponseCard

        toast.error(error.data.message ?? 'Delete Card failed')
      } finally {
        setDeleteModal(false)
      }
    }
  }

  return {
    dataTableDelete,
    deleteModal,
    isLoadingError,
    requestDeletion,
    setDataTableDelete,
    setDeleteModal,
  }
}
