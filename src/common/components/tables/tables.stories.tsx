import type { Meta, StoryObj } from '@storybook/react'

import { ButtonSort, Grade, Table, Tbody, Td, Th, Thead, Tools, Tr } from '@/common/components'

const meta = {
  component: Table,
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
      <div style={{ backgroundColor: 'gray', padding: '100px' }}>
        <Table>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Cards</Th>
              <Th>
                <ButtonSort onClick={onClick} text={'Last Updated'} />
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
                <Tools
                  canUseTool
                  onDelete={() => testDelete('777')}
                  onEdit={() => testEdit('777')}
                  onPlay={() => testPlay('777')}
                />
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
                  onDelete={() => testDelete('999')}
                  onEdit={() => testEdit('999')}
                  onPlay={() => testPlay('999')}
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
                <Tools
                  canUseTool
                  onDelete={() => testDelete('666')}
                  onEdit={() => testEdit('666')}
                  onPlay={() => testPlay('666')}
                />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    )
  },
} satisfies Story
