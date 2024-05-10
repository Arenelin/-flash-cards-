import type { Meta, StoryObj } from '@storybook/react'

import { SortFilter } from '@/common/components/ui/tables/sortFilter/SotrFilter'

const meta = {
  component: SortFilter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tables/TableWidgets/SortFilter',
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
