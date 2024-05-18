import { ComponentType } from 'react'

import { path } from '@/common/enums'
import { DecksList } from '@/features/decks/ui/decksList/DecksList'
import { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

// now this stories don`t working. We try to understand why ;-)

const meta = {
  component: DecksList,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: path.decks },
      routing: { Component: DecksList as ComponentType, path: path.decks, useStoryElement: true },
    }),
  },
  tags: ['autodocs'],
  title: 'Features/DecksList',
} satisfies Meta<typeof DecksList>

export default meta
type Story = StoryObj<typeof DecksList>

export const Decks_List = {} satisfies Story
