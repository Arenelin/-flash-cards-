import type { Meta, StoryObj } from '@storybook/react'

import { ComponentType } from 'react'

import { path } from '@/common/enums'
import { TableOtherDeck } from '@/features/decks/ui/deckById/ui/tableOtherDeck/TableOtherDeck'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: TableOtherDeck,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      location: { path: path.decks },
      routing: {
        Component: TableOtherDeck as ComponentType,
        path: path.decks,
        useStoryElement: true,
      },
    }),
  },
  tags: ['autodocs'],
  title: 'Tables/Tables',
} satisfies Meta<typeof TableOtherDeck>

export default meta
type Story = StoryObj<typeof TableOtherDeck>

// const onSortLastUpdated = () => {
//   alert('sort!')
// }
// const testDelete = (id: string) => {
//   alert(`id: ${id} Delete`)
// }
// const testPlay = (id: string) => {
//   alert(`id: ${id} Play`)
// }
//
// const testEdit = (id: string) => {
//   alert(`id: ${id} Edit`)
// }
//
// const decks: Deck[] = [
//   {
//     author: { id: 'd591403e-3452-438c-b4e7-a13b8e3b7066', name: 'Alex' },
//     cardsCount: 25,
//     cover: '',
//     created: '2023-08-24T20:48:19.685Z',
//     id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
//     isPrivate: false,
//     name: 'JS',
//     updated: '2024-05-15T03:41:42.488Z',
//     userId: 'a6fa6aad-7d35-46a5-ad86-99587f537623',
//   },
//   {
//     author: { id: 'a6fasaad-7d35-46a5-ad86-99587f837623', name: 'Sophie' },
//     cardsCount: 53,
//     cover: '',
//     created: '2023-03-24T20:48:19.685Z',
//     id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
//     isPrivate: false,
//     name: 'React',
//     updated: '2024-01-15T03:41:42.488Z',
//     userId: 'a6fasaad-7d35-46a5-ad86-99587f837623',
//   },
//   {
//     author: { id: 'd591403e-3452-438c-b4e7-a13b8e3b7066', name: 'Dmitriy' },
//     cardsCount: 15,
//     cover: '',
//     created: '2022-08-24T20:48:19.685Z',
//     id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
//     isPrivate: true,
//     name: 'Redux',
//     updated: '2023-05-15T03:41:42.488Z',
//     userId: 'a6fa6add-7d35-46a5-ad86-995874537623',
//   },
// ]

export const Table_Other_Deck = {
  args: {},
} satisfies Story
