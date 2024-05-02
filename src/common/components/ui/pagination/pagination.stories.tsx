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

export const Default = {
  render: () => {
    const [page, setPage] = useState(1)
    const TOTAL_PAGE_COUNT = 42

    return (
      <Pagination currentPage={page} onPageChange={setPage} totalPageCount={TOTAL_PAGE_COUNT} />
    )
  },
} satisfies Story
export const DefaultWithTwoPages = {
  render: () => {
    const [page, setPage] = useState(1)
    const TOTAL_PAGE_COUNT = 2

    return (
      <Pagination currentPage={page} onPageChange={setPage} totalPageCount={TOTAL_PAGE_COUNT} />
    )
  },
} satisfies Story
export const DefaultWithOnePages = {
  render: () => {
    const [page, setPage] = useState(1)
    const TOTAL_PAGE_COUNT = 1

    return (
      <Pagination currentPage={page} onPageChange={setPage} totalPageCount={TOTAL_PAGE_COUNT} />
    )
  },
} satisfies Story
