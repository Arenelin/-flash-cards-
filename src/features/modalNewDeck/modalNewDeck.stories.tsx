import { useState } from 'react'

import { Button } from '@/common/components/ui'
import { ModalNewDeck } from '@/features/modalNewDeck/ModalNewDeck'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ModalNewDeck,
  tags: ['autodocs'],
  title: 'Modal/ModalNewDeck',
} satisfies Meta<typeof ModalNewDeck>

export default meta
type Story = StoryObj<typeof ModalNewDeck>

export const ModalNewCard = {
  args: {
    onSubmit: data => alert(data),
    title: 'Add New Deck',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Add New Deck</Button>
        <ModalNewDeck
          onOpenChange={setOpen}
          onSubmit={args.onSubmit}
          open={open}
          title={args.title}
        />
      </>
    )
  },
} satisfies Story
