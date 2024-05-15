import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/common/components/ui'

const meta = {
  argTypes: {},
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
    const [page, setPage] = useState(1)
    const TOTAL_COUNT = 2000

    return (
      <Pagination
        currentPage={page}
        itemsPerPage={'10'}
        onPageChange={setPage}
        pageSizeChange={() => {}}
        totalCount={TOTAL_COUNT}
      />
    )
  },
} satisfies Story
