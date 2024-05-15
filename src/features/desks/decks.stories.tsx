import { Decks } from '@/features/desks/Decks'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Decks,
  tags: ['autodocs'],
  title: 'Features/Decks',
} satisfies Meta<typeof Decks>

export default meta
type Story = StoryObj<typeof Decks>

export const DecksDemo = {} satisfies Story
