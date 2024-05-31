import { useState } from 'react'
import { toast } from 'react-toastify'

import { ErrorResponseField, UpdateDecksArgs } from '@/common/types'
import { useUpdateDeckMutation } from '@/features/decks/api/decksApi'

export const useUpdateDeckId = () => {
  const [updateModalDeck, setUpdateModalDeck] = useState(false)
  const [updateDeck] = useUpdateDeckMutation()
  const requestUpdateDeck = async (args: UpdateDecksArgs) => {
    try {
      await updateDeck(args).unwrap()
      toast.success('Card Update')
    } catch (e) {
      const error = e as ErrorResponseField

      toast.error(error.data.message ?? 'Update Card failed')
    } finally {
      setUpdateModalDeck(false)
    }
  }

  return {
    requestUpdateDeck,
    setUpdateModalDeck,
    updateModalDeck,
  }
}