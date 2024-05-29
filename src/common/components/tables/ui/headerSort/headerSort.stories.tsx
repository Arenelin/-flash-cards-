import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { HeaderSort } from '@/common/components'
import { Sort } from '@/common/types'

const meta = {
  component: HeaderSort,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/HeaderSort',
} satisfies Meta<typeof HeaderSort>

export default meta
type Story = StoryObj<typeof HeaderSort>

export const HeaderSortTables = {
  args: {
    columns: [
      {
        key: 'name',
        sortable: true,
        title: 'Name',
      },
      {
        key: 'cardsCount',
        sortable: true,
        title: 'Cards',
      },
      {
        key: 'updated',
        sortable: true,
        title: 'Last Updated',
      },
      {
        key: 'createdBy',
        sortable: true,
        title: 'Created by',
      },
    ],
  },
  render: args => {
    const [sort, setSort] = useState<Sort>(null)

    return <HeaderSort columns={args.columns} onSort={setSort} sort={sort} />
  },
} satisfies Story
