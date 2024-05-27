import { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom'

import { Preloader } from '@/common/components/preloader/Preloader'
import { GradeScale } from '@/common/types'
import { useGetCardForLearnQuery, useSaveGradeOfCardMutation } from '@/features/cards/api/cardsApi'
import { LearnCards } from '@/features/cards/ui/LearnCards'
import { useGetDeckByIdQuery } from '@/features/decks/api/decksApi'

import s from '@/features/cards/ui/learnCards.module.scss'

export const LearnCardsPage = () => {
  const params: Readonly<Params<string>> = useParams()
  const id = params?.id || ''
  const result = useGetCardForLearnQuery({ id })
  const { data: deckData, isLoading: isLoadingDeck } = useGetDeckByIdQuery({ id })
  const [saveGradeOfCard, { isLoading: isLoadingCard }] = useSaveGradeOfCardMutation()
  const [cardData, setCardData] = useState(result.data)

  useEffect(() => {
    if (result.data) {
      setCardData(result.data)
    }
  }, [result.data])

  const nextCardHandler = async (cardId: string, grade: GradeScale) => {
    const res = await saveGradeOfCard({ cardId: cardId, deckId: id, grade: grade }).unwrap()

    if (res) {
      setCardData(res)
    }
  }

  if (isLoadingCard || isLoadingDeck || result.isLoading) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  return <LearnCards cardData={cardData} deckData={deckData} onSubmit={nextCardHandler} />
}

LearnCardsPage.displayName = 'CardByIdLearnPage'
