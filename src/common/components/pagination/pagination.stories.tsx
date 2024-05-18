import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/common/components'

const meta = {
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof Pagination>

export const PaginationDemo = {
  render: () => {
    const TOTAL_COUNT = 2000

    return <Pagination onCurrentPageChange={() => {}} totalCount={TOTAL_COUNT} />
  },
} satisfies Story
