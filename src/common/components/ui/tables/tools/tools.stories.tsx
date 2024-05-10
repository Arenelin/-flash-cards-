import type { Meta, StoryObj } from '@storybook/react'

import { Tools } from '@/common/components/ui/tables/tools/Tools'

const meta = {
  component: Tools,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tables/TableWidgets/Tools',
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
    onDelete: testCallBack,
    onEdit: testCallBack,
  },
} satisfies Story
