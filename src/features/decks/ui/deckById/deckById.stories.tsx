import { ComponentType } from 'react'

import { path } from '@/common/enums'
import { DeckById } from '@/features/decks/ui/deckById/DeckById'
import { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: DeckById,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: `${path.decks}/:id` },
      routing: { Component: DeckById as ComponentType, path: path.decks, useStoryElement: true },
    }),
  },
  tags: ['autodocs'],
  title: 'Features/DeckById',
} satisfies Meta<typeof DeckById>

export default meta
type Story = StoryObj<typeof DeckById>

export const DeckByIdDemo = {} satisfies Story
