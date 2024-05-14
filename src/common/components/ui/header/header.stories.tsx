import { Meta, StoryObj } from '@storybook/react'

import { Header } from './Header'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const HeaderSection = {} satisfies Story
