import { Error } from '@/common/components/ui/error/Error'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Error,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Error',
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof Error>

export const ErrorStories = {} satisfies Story
