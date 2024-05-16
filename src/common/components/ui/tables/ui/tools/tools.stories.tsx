import type { Meta, StoryObj } from '@storybook/react'

import { Tools } from '@/common/components/ui/tables/ui/tools/Tools'

const meta = {
  component: Tools,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/Tools',
} satisfies Meta<typeof Tools>

export default meta
type Story = StoryObj<typeof Tools>

const testCallBack = () => {
  alert('Test')
}

export const ToolsAll = {
  args: {
    canUseTool: true,
    onDelete: testCallBack,
    onEdit: testCallBack,
    onPlay: testCallBack,
  },
} satisfies Story

export const ToolsPartial = {
  args: {
    canUseTool: false,
    onPlay: testCallBack,
  },
} satisfies Story