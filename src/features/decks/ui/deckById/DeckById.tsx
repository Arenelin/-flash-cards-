import { NavLink, Params, useParams } from 'react-router-dom'

import { ArrowArrowBack } from '@/assets/icons'
import { Button, Pagination } from '@/common/components'
import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'
import { ErrorResponse, GetDeckByIdResponse } from '@/common/types'
import { useGetDeckByIdQuery } from '@/features/decks/api/decksApi'
import { TableMyDeck } from '@/features/decks/ui/deckById/ui/tableMyDeck/TableMyDeck'
import { TableOtherDeck } from '@/features/decks/ui/deckById/ui/tableOtherDeck/TableOtherDeck'

import s from '@/features/decks/ui/decks.module.scss'

export const DeckById = () => {
  const params: Readonly<Params<string>> = useParams()

  const { data, error, isLoading } = useGetDeckByIdQuery({ id: params.id ?? '' })

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
      <Button as={NavLink} to={path.decks}>
        <ArrowArrowBack /> Back to Decks List
      </Button>
      {deckData.id === deckData.author.id ? (
        <TableMyDeck deckId={deckData.id} />
      ) : (
        <TableOtherDeck deckId={deckData.id} />
      )}
      <Pagination totalCount={2000} /> {/* TODO set current value from request*/}
    </div>
  )
}
