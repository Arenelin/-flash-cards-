import { useState } from 'react'

import { TrashOutline } from '@/assets/icons'
import { ModalDelete } from '@/features/modals/modalDelete/ModalDelete'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ModalDelete,
  tags: ['autodocs'],
  title: 'Modal/ModalDelete',
} satisfies Meta<typeof ModalDelete>

export default meta
type Story = StoryObj<typeof ModalDelete>

const name = 'Java Script'

export const ModalDeleteCard = {
  args: {
    text: `Do you really want to remove ${name}?\n` + 'Card will be deleted.',
    title: 'Delete Card',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <div style={{ backgroundColor: 'black', padding: '100px' }}>
        <button onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
          <TrashOutline />
        </button>
        <ModalDelete
          onDelete={() => {
            alert('Delete')
            setOpen(false)
          }}
          onOpenChange={setOpen}
          open={open}
          text={args.text}
          title={args.title}
        />
      </div>
    )
  },
} satisfies Story

export const ModalDeleteDeck = {
  args: {
    text: `Do you really want to remove ${name}?\n` + 'All cards will be deleted.',
    title: 'Delete Deck',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <div style={{ backgroundColor: 'black', padding: '100px' }}>
        <button onClick={() => setOpen(true)} style={{ cursor: 'pointer' }}>
          <TrashOutline />
        </button>
        <ModalDelete
          onDelete={() => {
            alert('Delete')
            setOpen(false)
          }}
          onOpenChange={setOpen}
          open={open}
          text={args.text}
          title={args.title}
        />
      </div>
    )
  },
} satisfies Story
