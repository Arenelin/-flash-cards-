import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card'

const meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const CardSection = {
  args: {
    as: 'section',
    ref: null,
  },
} satisfies Story
