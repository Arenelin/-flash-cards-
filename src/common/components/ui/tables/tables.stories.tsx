import type { Meta, StoryObj } from '@storybook/react'

import { TableComponents } from '@/common/components/ui/tables/Tables'
import { Grade } from '@/common/components/ui/tables/grade/Grade'
import { Tools } from '@/common/components/ui/tables/tools/Tools'

const meta = {
  component: TableComponents.Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tables',
} satisfies Meta<typeof TableComponents.Table>

export default meta
type Story = StoryObj<typeof TableComponents.Table>

export const Tables = {
  render: () => {
    const header = ['Name', 'Cards', 'Last Updated', 'Created by', 'Grade', '']
    const headCells = header.map((headCell, index) => {
      return <TableComponents.Th key={index}>{headCell}</TableComponents.Th>
    })

    return (
      <TableComponents.Table>
        <TableComponents.Thead>
          <TableComponents.Tr>{headCells}</TableComponents.Tr>
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
              <Tools canUseTool />
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
              <Tools canUseTool />
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
              <Tools canUseTool />
            </TableComponents.Td>
          </TableComponents.Tr>
        </TableComponents.Body>
      </TableComponents.Table>
    )
  },
} satisfies Story
