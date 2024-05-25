import type { Meta, StoryObj } from '@storybook/react'

import { ButtonSort, Grade, Table, Tbody, Td, Th, Thead, Tools, Tr } from '@/common/components'
import { useStoryButtonSort } from '@/common/hooks/stotybookHooks/useStoryButtonSort'
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

export const Tables = {
  render: () => {
    const { onSort, sort } = useStoryButtonSort()

    return (
      <div style={{ backgroundColor: 'gray', padding: '100px' }}>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Cards</Th>
              <Th>
                <ButtonSort onSort={onSort} sort={sort} text={'Last Updated'} />
              </Th>
              <Th>Created by</Th>
              <Th>Grade</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Name Cards</Td>
              <Td>4</Td>
              <Td>18.06.1967</Td>
              <Td>3</Td>
              <Td>
                <Grade currentGrade={2} />{' '}
              </Td>
              <Td>
                <Tools canUseTool id={'scdfghjhgfds'} onDelete={testDelete} onEdit={testEdit} />
              </Td>
            </Tr>
            <Tr>
              <Td>Name Cards</Td>
              <Td>4</Td>
              <Td>18.06.1967</Td>
              <Td>3</Td>
              <Td>
                <Grade currentGrade={4} />
              </Td>
              <Td>
                <Tools
                  canUseTool={false}
                  id={'asxcdfvbghnjmk'}
                  onDelete={testDelete}
                  onEdit={testEdit}
                />
              </Td>
            </Tr>
            <Tr>
              <Td>Name Cards</Td>
              <Td>4</Td>
              <Td>18.06.1967</Td>
              <Td>3</Td>
              <Td>
                <Grade currentGrade={1} />
              </Td>
              <Td>
                <Tools canUseTool id={'axscdvfcgvhbjn'} onDelete={testDelete} onEdit={testEdit} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    )
  },
} satisfies Story
