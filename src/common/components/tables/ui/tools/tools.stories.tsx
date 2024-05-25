import type { Meta, StoryObj } from '@storybook/react'

import { Tools } from '@/common/components/tables/ui/tools/Tools'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: Tools,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/Tools',
} satisfies Meta<typeof Tools>

export default meta
type Story = StoryObj<typeof Tools>

const testCallBack = (id: string) => {
  alert(`Test ${id}`)
}

export const ToolsAll = {
  args: {
    canUseTool: true,
    id: 'sdfgvbhnjmhgfds',
    onDelete: testCallBack,
    onEdit: testCallBack,
    style: { backgroundColor: 'black', padding: '100px' },
  },
} satisfies Story

export const ToolsPartial = {
  args: {
    canUseTool: false,
    id: 'sdfgvbhnjmhgfds',
    style: { backgroundColor: 'black', padding: '100px' },
  },
} satisfies Story

export const ToolsEditor = {
  args: {
    canUsePlay: false,
    id: 'sdfgvbhnjmhgfds',
    style: { backgroundColor: 'black', padding: '100px' },
  },
} satisfies Story
