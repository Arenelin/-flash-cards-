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
      <>
        <button onClick={() => setOpen(true)}>
          <TrashOutline />
        </button>
        <ModalDelete onOpenChange={setOpen} open={open} text={args.text} title={args.title} />
      </>
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
      <>
        <button onClick={() => setOpen(true)}>
          <TrashOutline />
        </button>
        <ModalDelete onOpenChange={setOpen} open={open} text={args.text} title={args.title} />
      </>
    )
  },
} satisfies Story
