import type { Meta, StoryObj } from '@storybook/react'

import { Grade } from '@/common/components/ui/grade/Grade'
import { TableComponents } from '@/common/components/ui/tables/Tables'
import { Tools } from '@/common/components/ui/tools/Tools'

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
      return <TableComponents.HeadCell key={index}>{headCell}</TableComponents.HeadCell>
    })

    return (
      <TableComponents.Table>
        <TableComponents.Thead>
          <TableComponents.Row>{headCells}</TableComponents.Row>
        </TableComponents.Thead>
        <TableComponents.Body>
          <TableComponents.Row>
            <TableComponents.Cell>Name Cards</TableComponents.Cell>
            <TableComponents.Cell>4</TableComponents.Cell>
            <TableComponents.Cell>18.06.1967</TableComponents.Cell>
            <TableComponents.Cell>3</TableComponents.Cell>
            <TableComponents.Cell>
              <Grade currentGrade={2} />{' '}
            </TableComponents.Cell>
            <TableComponents.Cell>
              <Tools canUseTool />
            </TableComponents.Cell>
          </TableComponents.Row>
          <TableComponents.Row>
            <TableComponents.Cell>Name Cards</TableComponents.Cell>
            <TableComponents.Cell>4</TableComponents.Cell>
            <TableComponents.Cell>18.06.1967</TableComponents.Cell>
            <TableComponents.Cell>3</TableComponents.Cell>
            <TableComponents.Cell>
              <Grade currentGrade={4} />
            </TableComponents.Cell>
            <TableComponents.Cell>
              <Tools canUseTool />
            </TableComponents.Cell>
          </TableComponents.Row>
          <TableComponents.Row>
            <TableComponents.Cell>Name Cards</TableComponents.Cell>
            <TableComponents.Cell>4</TableComponents.Cell>
            <TableComponents.Cell>18.06.1967</TableComponents.Cell>
            <TableComponents.Cell>3</TableComponents.Cell>
            <TableComponents.Cell>
              <Grade currentGrade={1} />
            </TableComponents.Cell>
            <TableComponents.Cell>
              <Tools canUseTool />
            </TableComponents.Cell>
          </TableComponents.Row>
        </TableComponents.Body>
      </TableComponents.Table>
    )
  },
} satisfies Story
