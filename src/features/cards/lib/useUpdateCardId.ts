import { useState } from 'react'
import { toast } from 'react-toastify'

import { CardUpdateBody, ErrorResponseField } from '@/common/types'
import { useUpdateCardMutation } from '@/features/cards/api/cardsApi'

export const useUpdateCardId = () => {
  const [updateModal, setUpdateModal] = useState<boolean>(false)
  const [updateCard, { isLoading: isLoadingUpdate }] = useUpdateCardMutation()
  const [dataUpdateTable, setUpdateTable] = useState<CardUpdateBody>()
  const [dataIdTable, setIdTable] = useState<string>()
  const requestUpdate = async (args: CardUpdateBody) => {
    try {
      await updateCard({ ...args, id: dataIdTable ?? '' }).unwrap()
      toast.success('Card Update')
    } catch (e) {
      const error = e as ErrorResponseField

      toast.error(error.data.message ?? 'Update Card failed')
    } finally {
      setUpdateModal(false)
    }
  }

  return {
    dataUpdateTable,
    isLoadingUpdate,
    requestUpdate,
    setIdTable,
    setUpdateModal,
    setUpdateTable,
    updateModal,
  }
}
