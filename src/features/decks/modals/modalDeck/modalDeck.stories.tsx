import { useState } from 'react'

import { Button } from '@/common/components'
import { ModalDeck } from '@/features/decks/modals/modalDeck/ModalDeck'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ModalDeck,
  tags: ['autodocs'],
  title: 'Modal/ModalDeck',
} satisfies Meta<typeof ModalDeck>

export default meta
type Story = StoryObj<typeof ModalDeck>
export const ModalEditDeck = {
  args: {
    data: {
      cover:
        'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/d0f80403-d36f-440d-a30d-795f69386a9d_Screenshot 2023-07-27 112732.png',
      name: 'Alina',
      private: true,
    },
    onSubmit: data => {
      alert(`${data.name} ${data.private} ${data.cover}: data `)
    },
    title: 'Edit Deck',
  },

  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit Deck</Button>
        <ModalDeck
          data={args.data}
          onOpenChange={setOpen}
          onSubmit={args.onSubmit}
          open={open}
          title={args.title}
        />
      </>
    )
  },
} satisfies Story

export const ModalNewDeck = {
  args: {
    onSubmit: data => {
      alert(`${data.name} ${data.private} ${data.cover}: data `)
    },
    title: 'Add New Deck',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Add New Deck</Button>
        <ModalDeck onOpenChange={setOpen} onSubmit={args.onSubmit} open={open} title={args.title} />
      </>
    )
  },
} satisfies Story
