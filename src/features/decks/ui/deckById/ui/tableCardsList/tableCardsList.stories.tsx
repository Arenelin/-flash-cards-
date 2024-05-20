import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/common/types'
import { TableCardsList } from '@/features/decks/ui/deckById/ui/tableCardsList/TableCardsList'

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

const onSortLastUpdated = () => {
  alert('sort!')
}
const testDelete = (id: string) => {
  alert(`id: ${id} Delete`)
}
const testEdit = (id: string) => {
  alert(`id: ${id} Edit`)
}

const cards: Card[] = [
  {
    answer: 'answer',
    answerImg: 'IMAGE',
    answerVideo: '',
    created: '2024-05-15T03:41:42.488Z',
    deckId: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    grade: 3,
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    question: 'question',
    questionImg: 'IMAGE',
    questionVideo: '',
    shots: 5,
    updated: '2024-05-15T03:41:42.488Z',
    userId: '',
  },
  {
    answer: 'answer',
    answerImg: 'IMAGE',
    answerVideo: '',
    created: '2024-05-15T03:41:42.488Z',
    deckId: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    grade: 5,
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    question: 'question',
    questionImg: 'IMAGE',
    questionVideo: '',
    shots: 5,
    updated: '2024-05-15T03:41:42.488Z',
    userId: '',
  },
  {
    answer: 'answer',
    answerImg: 'IMAGE',
    answerVideo: '',
    created: '2024-05-15T03:41:42.488Z',
    deckId: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    grade: 0,
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    question: 'question',
    questionImg: 'IMAGE',
    questionVideo: '',
    shots: 5,
    updated: '2024-05-15T03:41:42.488Z',
    userId: '',
  },
]

export const Table_Cards_List_My = {
  render() {
    return (
      <div style={{ backgroundColor: 'gray', padding: '100px' }}>
        <TableCardsList
          cards={cards}
          isMy
          onDelete={testDelete}
          onEdit={testEdit}
          onSortLastUpdated={onSortLastUpdated}
        />
      </div>
    )
  },
} satisfies Story

export const Table_Cards_List = {
  render() {
    return (
      <div style={{ backgroundColor: 'gray', padding: '100px' }}>
        <TableCardsList
          cards={cards}
          isMy={false}
          onDelete={testDelete}
          onEdit={testEdit}
          onSortLastUpdated={onSortLastUpdated}
        />
      </div>
    )
  },
} satisfies Story
