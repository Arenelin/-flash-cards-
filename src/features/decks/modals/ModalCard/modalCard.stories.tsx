import { useState } from 'react'

import { Button } from '@/common/components'
import { CardForm, ModalCard } from '@/features/decks/modals/ModalCard/ModalCard'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: ModalCard,
  tags: ['autodocs'],
  title: 'Modal/ModalCard',
} satisfies Meta<typeof ModalCard>

export default meta

type Story = StoryObj<typeof ModalCard>
export const ModalEditCardWithImage = {
  args: {
    defaultValues: {
      answer: 'Tomorrow',
      answerImg: null,
      question: 'When to work',
      questionImg:
        'https://staging-it-incubator.s3.eu-central-1.amazonaws.com/flashcards/Image/d0f80403-d36f-440d-a30d-795f69386a9d_Screenshot 2023-07-27 112732.png',
    },
    onSubmit: (d: CardForm) => {
      alert(`${d.answer} ${d.question} ${d.questionImg} ${d.answerImg}: data `)
    },
    title: 'Edit Card',
  },

  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit Card</Button>
        <ModalCard
          defaultValues={args.defaultValues}
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
    defaultValues: {
      answer: 'Tomorrow',
      answerImg: null,
      question: 'When to work',
      questionImg: null,
    },
    onSubmit: data => {
      alert(`${data.answer} ${data.question} ${data.questionImg} ${data.answerImg}: data `)
    },
    title: 'Edit Card',
  },

  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Edit Card</Button>
        <ModalCard
          defaultValues={args.defaultValues}
          onOpenChange={setOpen}
          onSubmit={args.onSubmit}
          open={open}
          title={args.title}
        />
      </>
    )
  },
} satisfies Story
export const ModalNewCard = {
  args: {
    onSubmit: (data: CardForm) => {
      alert(`${data.answer} ${data.question} ${data.questionImg} ${data.answerImg}: data `)
    },
    title: 'Add New Deck',
  },
  render: args => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <Button onClick={() => setOpen(true)}>Add New Card</Button>
        <ModalCard onOpenChange={setOpen} onSubmit={args.onSubmit} open={open} title={args.title} />
      </>
    )
  },
} satisfies Story
