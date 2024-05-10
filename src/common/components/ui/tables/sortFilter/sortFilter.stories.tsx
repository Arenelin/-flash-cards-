import type { Meta, StoryObj } from '@storybook/react'

import { SortFilter } from '@/common/components/ui/tables/sortFilter/SotrFilter'

const meta = {
  component: SortFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/SortFilter',
} satisfies Meta<typeof SortFilter>

export default meta
type Story = StoryObj<typeof SortFilter>

const sort = () => {
  alert('Sort!')
}

export const Sort = {
  args: {
    onSort: sort,
  },
} satisfies Story
