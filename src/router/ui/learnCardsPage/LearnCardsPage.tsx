import { Params, useParams } from 'react-router-dom'

import { Preloader } from '@/common/components/preloader/Preloader'
import { GradeScale } from '@/common/types'
import { LearnCards } from '@/features/cards/LearnCards'
import { useGetCardForLearnQuery, useSaveGradeOfCardMutation } from '@/features/cards/api/cardsApi'
import { useGetDeckByIdQuery } from '@/features/decks/api/decksApi'
import { Page } from '@/router/ui/page/Page'

import s from '@/features/cards/learnCards.module.scss'

export const LearnCardsPage = () => {
  const params: Readonly<Params<string>> = useParams()
  const id = params?.id || ''
  const { data: cardData, isLoading: isLoadingCard } = useGetCardForLearnQuery({ id })
  const { data: deckData, isLoading: isLoadingDeck } = useGetDeckByIdQuery({ id })
  const [saveGradeOfCard, { data: newCardData }] = useSaveGradeOfCardMutation()

  const nextCardHendler = (grade: GradeScale) => {
    saveGradeOfCard({ cardId: cardData?.id || '', deckId: deckData?.id || '', grade })
  }

  if (isLoadingCard || isLoadingDeck) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  return (
    <Page>
      <LearnCards cardData={cardData} deckData={deckData} onSubmit={nextCardHendler} />
    </Page>
  )
}

LearnCardsPage.displayName = 'CardByIdLearnPage'
