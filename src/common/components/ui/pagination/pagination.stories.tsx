import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Pagination } from '@/common/components'

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

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const TOTAL_PAGE_COUNT = 42

    return (
      <Pagination currentPage={page} onPageChange={setPage} totalPageCount={TOTAL_PAGE_COUNT} />
    )
  },
} satisfies Story
export const DefaultWithTwoPages: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const TOTAL_PAGE_COUNT = 2

    return (
      <Pagination currentPage={page} onPageChange={setPage} totalPageCount={TOTAL_PAGE_COUNT} />
    )
  },
} satisfies Story
export const DefaultWithOnePages: Story = {
  render: () => {
    const [page, setPage] = useState(1)
    const TOTAL_PAGE_COUNT = 1

    return (
      <Pagination currentPage={page} onPageChange={setPage} totalPageCount={TOTAL_PAGE_COUNT} />
    )
  },
} satisfies Story
