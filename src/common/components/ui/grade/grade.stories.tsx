import type { Meta, StoryObj } from '@storybook/react'

import { Grade } from '@/common/components/ui/grade/Grade'

const meta = {
  component: Grade,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Grade',
} satisfies Meta<typeof Grade>

export default meta
type Story = StoryObj<typeof Grade>

export const GradeStory = {
  args: {
    currentGrade: 4,
  },
} satisfies Story