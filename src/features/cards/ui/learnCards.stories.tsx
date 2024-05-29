import { Card as CardItem, Deck, GradeScale } from '@/common/types'
import { LearnCards } from '@/features/cards/ui/LearnCards'
import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: LearnCards,
  decorators: [withRouter],
  tags: ['autodocs'],
  title: 'Features/LearnCards',
} satisfies Meta<typeof LearnCards>

export default meta
type Story = StoryObj<typeof LearnCards>

const onSubmit = (cardId: string, grade: GradeScale) => {
  alert(`Получена оценка по данной карточке для передачи на сервер:  ${grade}\n
  id карточки: ${cardId}`)
}
const cardData: CardItem = {
  answer: 'Tomorrow',
  answerImg: null,
  answerVideo: '',
  created: '',
  deckId: '',
  grade: 3,
  id: 'd591403e-3452-438c-b4e7-a13b8e3b7066',
  question: 'When to work?',
  questionImg:
    'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/d0f80403-d36f-440d-a30d-795f69386a9d_Screenshot 2023-07-27 112732.png',
  questionVideo: '',
  shots: 7,
  updated: '',
  userId: '',
}

const deckData: Omit<Deck, 'author'> = {
  cardsCount: 15,
  cover: '',
  created: '',
  id: '',
  isPrivate: false,
  name: 'Test Deck',
  updated: '',
  userId: '',
}

export const LearnCardsDemo = {
  args: {
    cardData,
    deckData,
    onSubmit,
  },
} satisfies Story

const emptyDeckData: Omit<Deck, 'author'> = {
  cardsCount: 0,
  cover: '',
  created: '',
  id: '',
  isPrivate: false,
  name: 'Test Deck',
  updated: '',
  userId: '',
}

export const LearnCardsEmpty = {
  args: {
    cardData,
    deckData: emptyDeckData,
    onSubmit,
  },
} satisfies Story
