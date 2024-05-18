import type { Meta, StoryObj } from '@storybook/react'

import { Grade } from '@/common/components/tables/ui/grade/Grade'

const meta = {
  component: Grade,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/Grade',
} satisfies Meta<typeof Grade>

export default meta
type Story = StoryObj<typeof Grade>

export const GradeStory = {
  args: {
    currentGrade: 4,
  },
} satisfies Story
