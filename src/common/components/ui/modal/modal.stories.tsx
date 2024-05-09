import { useState } from 'react'

import { Edit2, Eye, Image, Search } from '@/assets/icons'
import { Button, Modal } from '@/common/components/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Modal,
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

export const ModalDefault = {
  args: {
    children: 'Modal',
    onOpenChange: () => {},
    open: true,
    title: 'Modal title',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <button onClick={() => setOpen(true)}>Open Modal</button>
        <Modal {...args} onOpenChange={setOpen} open={open}>
          <div style={{ padding: '20px' }}>
            Modal content:&nbsp; &nbsp;
            <Button>
              <Search /> <Image /> Test Content <Eye /> <Edit2 />
            </Button>
          </div>
        </Modal>
      </>
    )
  },
} satisfies Story
