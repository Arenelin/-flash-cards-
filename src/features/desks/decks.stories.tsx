import { ComponentType } from 'react'

import { path } from '@/common/enums'
import { Decks } from '@/features/desks/Decks'
import { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

// now this stories don`t working. We try to understand why ;-)

const meta = {
  component: Decks,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: { path: path.decks },
      routing: { Component: Decks as ComponentType, path: path.decks, useStoryElement: true },
    }),
  },
  tags: ['autodocs'],
  title: 'Features/Decks',
} satisfies Meta<typeof Decks>

export default meta
type Story = StoryObj<typeof Decks>

export const DecksDemo = {} satisfies Story
