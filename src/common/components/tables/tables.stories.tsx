import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Grade, Table, TablesHeaderSort, Tbody, Td, Tools, Tr } from '@/common/components'
import { GradeScale, Sort } from '@/common/types'
import { withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: Table,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/Tables',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof Table>

const testDelete = (id: string) => {
  alert(`id: ${id} Delete`)
}

const testEdit = (id: string) => {
  alert(`id: ${id} Edit`)
}

const columns = [
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
  {
    key: '',
    sortable: false,
    title: 'Grade',
  },
  {
    key: '',
    sortable: false,
    title: '',
  },
]
const data = [
  {
    cardsCount: 25,
    created: '12.12.2023',
    grade: 1,
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    name: 'JS',
    updated: '01.01.2024',
  },
  {
    cardsCount: 53,
    created: '15.05.2022',
    grade: 5,
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    name: 'React',
    updated: '12.12.2023',
  },
  {
    cardsCount: 15,
    created: '10.12.2021',
    grade: 4,
    id: '896a4f1f-bb5b-4ba4-8fb3-39b6cf6a7b5c',
    name: 'Redux',
    updated: '15.12.2021',
  },
]

export const Tables = {
  render: () => {
    const [sort, setSort] = useState<Sort>(null)

    return (
      <div>
        <Table>
          <TablesHeaderSort columns={columns} onSort={setSort} sort={sort} />
          <Tbody>
            {data.map(element => {
              return (
                <Tr key={element.id}>
                  <Td>{element.name}</Td>
                  <Td>{element.cardsCount}</Td>
                  <Td>{element.updated}</Td>
                  <Td>{element.created}</Td>
                  <Td>
                    <Grade currentGrade={element.grade as GradeScale} />
                  </Td>
                  <Td>
                    <Tools canUseTool id={element.id} onDelete={testDelete} onEdit={testEdit} />
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </div>
    )
  },
} satisfies Story
