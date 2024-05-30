import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CardBodyCreate, ErrorResponseField } from '@/common/types'
import { useCreateCardMutation } from '@/features/decks/api/decksApi'

export const useCreateCardId = () => {
  const [createModalCard, setCreateModalCard] = useState<boolean>(false)
  const [createCard] = useCreateCardMutation()
  const params = useParams()
  const requestCreate = async (args: CardBodyCreate) => {
    if (params.id) {
      try {
        await createCard({ ...args, id: params.id }).unwrap()
        toast.success('Card Create')
      } catch (e) {
        const error = e as ErrorResponseField

        toast.error(error.data.message ?? 'Create Card failed')
      } finally {
        setCreateModalCard(false)
      }
    }
  }

  return {
    createModalCard,
    requestCreate,
    setCreateModalCard,
  }
}
