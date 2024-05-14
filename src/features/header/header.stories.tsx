import { Header } from '@/features/header/Header'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Features/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const HeaderSection = {} satisfies Story
