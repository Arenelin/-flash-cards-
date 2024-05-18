import type { Meta, StoryObj } from '@storybook/react'

import { ComponentType } from 'react'

import { path } from '@/common/enums'
import { TableOtherDeck } from '@/features/decks/ui/deckById/ui/tableOtherDeck/TableOtherDeck'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: TableOtherDeck,
  decorators: [withRouter],
  parameters: {
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

export const Table_Other_Deck = {
  args: {},
} satisfies Story
