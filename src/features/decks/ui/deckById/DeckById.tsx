import { useSearchParams } from 'react-router-dom'

import { Preloader } from '@/common/components/ui/preloader/Preloader'
import { ErrorResponse, GetDeckByIdResponse } from '@/common/types'
import { useGetDeckByIdQuery } from '@/features/decks/api/decksApi'
import { TableMyDeck } from '@/features/decks/ui/deckTables/TableMyDeck'
import { TableOtherDeck } from '@/features/decks/ui/deckTables/TableOtherDeck'

import s from '@/features/decks/ui/decks.module.scss'

export const DeckById = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  setSearchParams(searchParams)
  const { data, error, isLoading } = useGetDeckByIdQuery({ id: searchParams.get('id') ?? '' })

  if (isLoading) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  if (error) {
    const err = error as ErrorResponse

    return (
      <div className={s.error}>
        {err.data.errorMessages.map(e => {
          return <p key={e.field}>{`at query parameter " ${e.field} " error: " ${e.message} "`}</p>
        })}
      </div>
    )
  }
  const deckData = data as GetDeckByIdResponse

  return (
    <div>
      {deckData.id === deckData.author.id ? (
        <TableMyDeck deck={deckData} />
      ) : (
        <TableOtherDeck deck={deckData} />
      )}
    </div>
  )
}
