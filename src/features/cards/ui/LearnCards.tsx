import { ElementRef, forwardRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { ArrowArrowBack } from '@/assets/icons'
import { Button, Card, RadioGroup, Typography } from '@/common/components'
import { dynamicPathDeckById } from '@/common/enums'
import { Card as CardItem, Deck, GradeScale, Option } from '@/common/types'

import s from '@/features/cards/ui/learnCards.module.scss'

type Props = {
  cardData?: CardItem
  deckData?: Omit<Deck, 'author'>
  onSubmit: (cardId: string, grade: GradeScale) => void
}

export const LearnCards = forwardRef<ElementRef<'div'>, Props>((props, ref) => {
  const { cardData, deckData, onSubmit } = props

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
    onSubmit(cardData?.id || '', rate)
    setRate(0)
  }

  if (!deckData?.cardsCount) {
    return (
      <div className={s.main}>
        <Typography as={NavLink} className={s.back} to={dynamicPathDeckById(deckData?.id || '')}>
          <ArrowArrowBack /> Back to Deck List
        </Typography>
        <Typography as={'p'} className={s.empty} variant={'body1'}>
          <b>Cards list is empty</b>
        </Typography>
      </div>
    )
  }

  return (
    <div className={s.main}>
      <Typography as={Link} className={s.back} to={dynamicPathDeckById(deckData?.id || '')}>
        <ArrowArrowBack /> Back to Deck List
      </Typography>
      <Card className={s.container} ref={ref}>
        <Typography as={'h1'} variant={'h1'}>
          Learn {deckData?.name}
        </Typography>
        <div className={s.questionBlock}>
          <Typography as={'p'} className={s.question} variant={'body1'}>
            <b>Question:</b> {cardData?.question}
          </Typography>
          {cardData?.questionImg && <img alt={'cardImage'} src={cardData?.questionImg} />}
          <Typography as={'p'} variant={'caption'}>
            Количество попыток ответить на вопрос: {cardData?.shots}
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
                <Typography as={'p'} className={s.answer} variant={'body1'}>
                  <b>Answer:</b> {cardData?.answer}
                </Typography>
                {cardData?.answerImg && <img alt={'cardImage'} src={cardData?.answerImg} />}
                {cardData?.answerVideo && <video src={cardData?.answerVideo} />}
              </div>
              <div className={s.rateBlock}>
                <Typography as={'h3'} variant={'h3'}>
                  <b>Rate yourself:</b>
                </Typography>
                <RadioGroup
                  defaultValue={'1'}
                  onValueChange={value => setRate(+value as GradeScale)}
                  options={answerRate}
                />
                <Button disabled={rate === 0} fullWidth onClick={onClickHandler}>
                  Next Question
                </Button>
              </div>
            </>
          )}
        </div>
      </Card>
    </div>
  )
})

LearnCards.displayName = 'LearnCards'
