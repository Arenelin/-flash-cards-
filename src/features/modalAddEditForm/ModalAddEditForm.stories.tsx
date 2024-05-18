import { useState } from 'react'

import { Button } from '@/common/components/ui'
import { ModalAddEditForm } from '@/features/modalAddEditForm/ModalNewDeck'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ModalAddEditForm,
  tags: ['autodocs'],
  title: 'Modal/ModalNewDeck',
} satisfies Meta<typeof ModalAddEditForm>

export default meta
type Story = StoryObj<typeof ModalAddEditForm>

export const ModalNewCard = {
  args: {
    onSubmit: data => alert(`${data.name} ${data.private}: data`),
    title: 'Add New Deck',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Add New Deck</Button>
        <ModalAddEditForm
          onOpenChange={setOpen}
          onSubmit={args.onSubmit}
          open={open}
          title={args.title}
        />
      </>
    )
  },
} satisfies Story

export const ModalEditCard = {
  args: {
    onSubmit: data => alert(`${data.name} ${data.private}: data`),
    title: 'Edit Deck',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Add New Deck</Button>
        <ModalAddEditForm
          onOpenChange={setOpen}
          onSubmit={args.onSubmit}
          open={open}
          title={args.title}
        />
      </>
    )
  },
} satisfies Story
