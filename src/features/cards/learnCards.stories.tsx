import { CardItem, Deck, GradeScale } from '@/common/types'
import { LearnCards } from '@/features/cards/LearnCards'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: LearnCards,
  tags: ['autodocs'],
  title: 'Features/LearnCards',
} satisfies Meta<typeof LearnCards>

export default meta
type Story = StoryObj<typeof LearnCards>

const onSubmit = (grade: GradeScale) => {
  alert(`Получена оценка по данной карточке для передачи на сервер:  ${grade}`)
}
const cardData: CardItem = {
  answer: 'Tomorrow',
  answerImg: null,
  answerVideo: '',
  created: '',
  deckId: '',
  grade: 3,
  id: '',
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
