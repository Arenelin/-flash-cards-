import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { columnsCards } from '@/common/consts'
import { Card, CardById, Sort } from '@/common/types'
import { TableCardsList } from '@/features/decks/deckById/ui/TableCardsList'

const meta = {
  component: TableCardsList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/TablesCardsList',
} satisfies Meta<typeof TableCardsList>

export default meta
type Story = StoryObj<typeof TableCardsList>

const testDelete = (idCard: string, question: string) => {
  alert(`id: ${idCard} Delete ${question}`)
}
const testEdit = (args: CardById) => {
  alert(`id: ${args.id} Edit`)
}

const cards: Card[] = [
  {
    answer: 'answer',
    answerImg:
      'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/8d66f974-9fbe-4679-a3cb-1d42250b28a2_image.webp',
    answerVideo: '',
    created: '2024-05-15T03:41:42.488Z',
    deckId: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    grade: 3,
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    question: 'question',
    questionImg:
      'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/8d66f974-9fbe-4679-a3cb-1d42250b28a2_image.webp',
    questionVideo: '',
    shots: 5,
    updated: '2024-05-15T03:41:42.488Z',
    userId: '',
  },
  {
    answer: 'answer',
    answerImg: null,
    answerVideo: '',
    created: '2024-05-15T03:41:42.488Z',
    deckId: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    grade: 5,
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    question: 'question',
    questionImg:
      'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/8d66f974-9fbe-4679-a3cb-1d42250b28a2_image.webp',
    questionVideo: '',
    shots: 5,
    updated: '2024-05-15T03:41:42.488Z',
    userId: '',
  },
  {
    answer: 'answer',
    answerImg: null,
    answerVideo: '',
    created: '2024-05-15T03:41:42.488Z',
    deckId: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    grade: 0,
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    question: 'question',
    questionImg: null,
    questionVideo: '',
    shots: 5,
    updated: '2024-05-15T03:41:42.488Z',
    userId: '',
  },
]

export const Table_Cards_List_My = {
  render() {
    const [sort, setSort] = useState<Sort>(null)

    return (
      <div>
        <TableCardsList
          cards={cards}
          columnsCards={columnsCards}
          isMy
          onDelete={testDelete}
          onEdit={testEdit}
          onSort={setSort}
          sort={sort}
        />
      </div>
    )
  },
} satisfies Story

export const Table_Cards_List = {
  render() {
    const [sort, setSort] = useState<Sort>(null)

    return (
      <div>
        <TableCardsList
          cards={cards}
          columnsCards={columnsCards}
          isMy={false}
          onDelete={testDelete}
          onEdit={testEdit}
          onSort={setSort}
          sort={sort}
        />
      </div>
    )
  },
} satisfies Story
