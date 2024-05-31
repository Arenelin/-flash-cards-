import { useState } from 'react'
import { toast } from 'react-toastify'

import { CreateDecksArgs, ErrorResponseField } from '@/common/types'
import { useCreateDeckMutation } from '@/features/decks/api/decksApi'

export const useCreateDeckById = () => {
  const [createModalDeck, setCreateModalDeck] = useState<boolean>(false)
  // eslint-disable-next-line no-undef
  const [createDeck] = useCreateDeckMutation()
  const requestCreateDeck = async (args: CreateDecksArgs) => {
    try {
      await createDeck(args).unwrap()
      toast.success('Deck Create')
    } catch (e) {
      const error = e as ErrorResponseField

      toast.error(error.data.message ?? 'Create Deck failed')
    } finally {
      setCreateModalDeck(false)
    }
  }

  return {
    createModalDeck,
    requestCreateDeck,
    setCreateModalDeck,
  }
}
