import { ElementRef, forwardRef, useState } from 'react'
import { Params, useParams } from 'react-router-dom'

import { Button, Card, RadioGroup, Typography } from '@/common/components'
import { Preloader } from '@/common/components/preloader/Preloader'
import { GradeScale, Option } from '@/common/types'
import { useGetCardForLearnQuery, useSaveGradeOfCardMutation } from '@/features/cards/api/cardsApi'
import { useGetDeckByIdQuery } from '@/features/decks/api/decksApi'

import s from './cardByIdLearn.module.scss'

export const CardByIdLearn = forwardRef<ElementRef<'div'>, undefined>((_, ref) => {
  const params: Readonly<Params<string>> = useParams()
  const id = params?.id || ''
  const { data: cardData, isLoading: isLoadingCard } = useGetCardForLearnQuery({ id })
  const { data: deckData, isLoading: isLoadingDeck } = useGetDeckByIdQuery({ id })
  const [saveGradeOfCard, { data: newCardData }] = useSaveGradeOfCardMutation()
  const [showAnswer, setShowAnswer] = useState(false)
  const [rate, setRate] = useState<GradeScale>(0)
  const answerRate: Option[] = [
    { label: 'Did not know', value: '1' },
    { label: 'Forgot', value: '2' },
    { label: 'A lot of though', value: '3' },
    { label: 'Confused', value: '4' },
    { label: 'Knew the answer', value: '5' },
  ]
  const onClickHandler = () => {
    setShowAnswer(false)
    saveGradeOfCard({ cardId: cardData?.id || '', grade: rate, id })
  }

  if (isLoadingCard || isLoadingDeck) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  return (
    <Card ref={ref}>
      <Typography as={'h1'} variant={'h1'}>
        Learn {deckData?.name}
      </Typography>
      <div className={s.questionBlock}>
        <Typography as={'h3'} variant={'h3'}>
          <b>Question:</b> {cardData?.question}
        </Typography>
        {cardData?.questionImg && <img src={cardData?.questionImg} />}
        <Typography as={'p'} variant={'body1'}>
          <b>Количество попыток ответить на вопрос:</b> {cardData?.shots}
        </Typography>
      </div>
      <div className={s.answerRateBlock}>
        {!showAnswer ? (
          <Button fullWidth onClick={() => setShowAnswer(true)}>
            Show Answer
          </Button>
        ) : (
          <>
            <div className={s.answerBlock}>
              <Typography as={'h3'} variant={'h3'}>
                <b>Answer:</b> {cardData?.answer}
              </Typography>
              {cardData?.answerImg && <img src={cardData?.answerImg} />}
              {cardData?.answerVideo && <video src={cardData?.answerVideo} />}
            </div>
            <div className={s.rateBlock}>
              <Typography as={'h3'} variant={'h3'}>
                <b>Rate yourself:</b>
              </Typography>
              <RadioGroup
                onValueChange={value => setRate(+value as GradeScale)}
                options={answerRate}
                value={rate.toString()}
              />
              <Button fullWidth onClick={onClickHandler}>
                Next Question
              </Button>
            </div>
          </>
        )}
      </div>
    </Card>
  )
})

CardByIdLearn.displayName = 'CardByIdLearn'
