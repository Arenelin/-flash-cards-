import type { Meta, StoryObj } from '@storybook/react'

import { TableComponents } from '@/common/components/ui/tables/Tables'
import { ButtonSort } from '@/common/components/ui/tables/ui/buttonSort/ButtonSort'
import { Grade } from '@/common/components/ui/tables/ui/grade/Grade'
import { Tools } from '@/common/components/ui/tables/ui/tools/Tools'

const meta = {
  component: TableComponents.Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/Tables',
} satisfies Meta<typeof TableComponents.Table>

export default meta
type Story = StoryObj<typeof TableComponents.Table>

const testDelete = (id: string) => {
  alert(`id: ${id} Delete`)
}
const testPlay = (id: string) => {
  alert(`id: ${id} Play`)
}

const testEdit = (id: string) => {
  alert(`id: ${id} Edit`)
}

export const Tables = {
  render: () => {
    const onClick = () => {
      alert('Logic sort')
    }

    return (
      <TableComponents.Table>
        <TableComponents.Thead>
          <TableComponents.Tr>
            <TableComponents.Th>Name</TableComponents.Th>
            <TableComponents.Th>Cards</TableComponents.Th>
            <TableComponents.Th>
              <ButtonSort onClick={onClick} text={'Last Updated'} />
            </TableComponents.Th>
            <TableComponents.Th>Created by</TableComponents.Th>
            <TableComponents.Th>Grade</TableComponents.Th>
            <TableComponents.Th></TableComponents.Th>
          </TableComponents.Tr>
        </TableComponents.Thead>
        <TableComponents.Body>
          <TableComponents.Tr>
            <TableComponents.Td>Name Cards</TableComponents.Td>
            <TableComponents.Td>4</TableComponents.Td>
            <TableComponents.Td>18.06.1967</TableComponents.Td>
            <TableComponents.Td>3</TableComponents.Td>
            <TableComponents.Td>
              <Grade currentGrade={2} />{' '}
            </TableComponents.Td>
            <TableComponents.Td>
              <Tools
                canUseTool
                onDelete={() => testDelete('777')}
                onEdit={() => testEdit('777')}
                onPlay={() => testPlay('777')}
              />
            </TableComponents.Td>
          </TableComponents.Tr>
          <TableComponents.Tr>
            <TableComponents.Td>Name Cards</TableComponents.Td>
            <TableComponents.Td>4</TableComponents.Td>
            <TableComponents.Td>18.06.1967</TableComponents.Td>
            <TableComponents.Td>3</TableComponents.Td>
            <TableComponents.Td>
              <Grade currentGrade={4} />
            </TableComponents.Td>
            <TableComponents.Td>
              <Tools
                canUseTool={false}
                onDelete={() => testDelete('999')}
                onEdit={() => testEdit('999')}
                onPlay={() => testPlay('999')}
              />
            </TableComponents.Td>
          </TableComponents.Tr>
          <TableComponents.Tr>
            <TableComponents.Td>Name Cards</TableComponents.Td>
            <TableComponents.Td>4</TableComponents.Td>
            <TableComponents.Td>18.06.1967</TableComponents.Td>
            <TableComponents.Td>3</TableComponents.Td>
            <TableComponents.Td>
              <Grade currentGrade={1} />
            </TableComponents.Td>
            <TableComponents.Td>
              <Tools
                canUseTool
                onDelete={() => testDelete('666')}
                onEdit={() => testEdit('666')}
                onPlay={() => testPlay('666')}
              />
            </TableComponents.Td>
          </TableComponents.Tr>
        </TableComponents.Body>
      </TableComponents.Table>
    )
  },
} satisfies Story
