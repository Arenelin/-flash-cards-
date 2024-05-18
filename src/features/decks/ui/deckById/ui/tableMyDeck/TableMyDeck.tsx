import { ComponentPropsWithoutRef } from 'react'

import s from '@/features/decks/ui/decks.module.scss'

type Props = { deckId: string } & ComponentPropsWithoutRef<'table'>

export const TableMyDeck = ({ deckId }: Props) => {
  return (
    <div className={s.container}>
      <p>{deckId}</p>
    </div>
  )
}
