import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { TablesHeaderSort } from '@/common/components'
import { Sort } from '@/common/types'

const meta = {
  component: TablesHeaderSort,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/TablesHeaderSort',
} satisfies Meta<typeof TablesHeaderSort>

export default meta
type Story = StoryObj<typeof TablesHeaderSort>

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

    return <TablesHeaderSort columns={args.columns} onSort={setSort} sort={sort} />
  },
} satisfies Story
