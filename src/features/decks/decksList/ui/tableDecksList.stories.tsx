import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { columnsDecks } from '@/common/consts'
import { Deck, Sort } from '@/common/types'
import { TableDecksList } from '@/features/decks/decksList/ui/TableDecksList'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: TableDecksList,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/TablesDecksList',
} satisfies Meta<typeof TableDecksList>

export default meta
type Story = StoryObj<typeof TableDecksList>

const testDelete = (id: string) => {
  alert(`id: ${id} Delete`)
}

const testEdit = (id: string) => {
  alert(`id: ${id} Edit`)
}

const decks: Deck[] = [
  {
    author: { id: 'd591403e-3452-438c-b4e7-a13b8e3b7066', name: 'Alex' },
    cardsCount: 25,
    cover: '',
    created: '2023-08-24T20:48:19.685Z',
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    isPrivate: false,
    name: 'JSJS   JSJSJSJSJSJSJSJSJSJSJS',
    updated: '2024-05-15T03:41:42.488Z',
    userId: 'a6fa6aad-7d35-46a5-ad86-99587f537623',
  },
  {
    author: { id: 'a6fasaad-7d35-46a5-ad86-99587f837623', name: 'Sophie' },
    cardsCount: 53,
    cover: '',
    created: '2023-03-24T20:48:19.685Z',
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    isPrivate: false,
    name: 'React',
    updated: '2024-01-15T03:41:42.488Z',
    userId: 'a6fasaad-7d35-46a5-ad86-99587f837623',
  },
  {
    author: { id: 'd591403e-3452-438c-b4e7-a13b8e3b7066', name: 'Dmitriy' },
    cardsCount: 15,
    cover: '',
    created: '2022-08-24T20:48:19.685Z',
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    isPrivate: true,
    name: 'Redux',
    updated: '2023-05-15T03:41:42.488Z',
    userId: 'a6fa6add-7d35-46a5-ad86-995874537623',
  },
]

export const Table_Decks_List = {
  render() {
    const [sort, setSort] = useState<Sort>(null)
    const userId = 'a6fa6add-7d35-46a5-ad86-995874537623'

    return (
      <div>
        <TableDecksList
          columnsDecks={columnsDecks}
          currentUserId={userId}
          decks={decks}
          onDelete={testDelete}
          onEdit={testEdit}
          onSort={setSort}
          sort={sort}
        />
      </div>
    )
  },
} satisfies Story
