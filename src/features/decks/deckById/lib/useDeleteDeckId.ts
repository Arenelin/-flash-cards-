import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ErrorResponseField } from '@/common/types'
import { useDeleteDeckMutation } from '@/features/decks/api/decksApi'

export const useDeleteDeckId = () => {
  const [deleteModalDeck, setDeleteModalDeck] = useState(false)
  const navigate = useNavigate()
  const [deleteDeck, { isLoading: isLoadingDeleteDeck }] = useDeleteDeckMutation()

  const requestDeleteDeck = async (id: string) => {
    try {
      await deleteDeck({ id }).unwrap()
      toast.success('Deck Delete')
      navigate(-1)
    } catch (e) {
      const error = e as ErrorResponseField

      toast.error(error.data.message ?? 'Delete Deck failed')
    } finally {
      setDeleteModalDeck(false)
    }
  }

  return {
    deleteModalDeck,
    isLoadingDeleteDeck,
    requestDeleteDeck,
    setDeleteModalDeck,
  }
}
