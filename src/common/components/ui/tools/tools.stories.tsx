import type { Meta, StoryObj } from '@storybook/react'

import { Tools } from '@/common/components/ui/tools/Tools'

const meta = {
  component: Tools,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tools',
} satisfies Meta<typeof Tools>

export default meta
type Story = StoryObj<typeof Tools>

export const ToolsAll = {
  args: {
    canUseTool: true,
  },
} satisfies Story

export const ToolsPartial = {
  args: {
    canUseTool: false,
  },
} satisfies Story
