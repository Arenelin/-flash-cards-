import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from '@/common/components'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: Pagination,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof Pagination>

export const PaginationDemo = {
  render: () => <Pagination totalCount={2000} />,
} satisfies Story
