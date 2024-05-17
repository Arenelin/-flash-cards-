import { GetDeckByIdResponse } from '@/common/types'

import s from '@/features/decks/ui/decks.module.scss'

type Props = { deck: GetDeckByIdResponse }

export const TableMyDeck = ({ deck }: Props) => {
  return (
    <div className={s.container}>
      <p>{deck.id}</p>
    </div>
  )
}
