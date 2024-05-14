// import { useCreateDecksMutation, useGetDecksQuery } from '@/features/desks/api/decks-api'
import { useGetDecksQuery } from '@/features/desks/api/decksApi'

export function DecksPage() {
  // const { data, error, isError, isLoading } = useGetDecksQuery()
  const { isError, isLoading } = useGetDecksQuery()
  // const [createDecks] = useCreateDecksMutation()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error</div>
  }

  return <div>Decks page </div>
}
