import type { Meta, StoryObj } from '@storybook/react'

import { ElementRef, useRef } from 'react'

import { Card } from '@/common/components/card/Card'

const meta = {
  component: Card,
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof Card>

export const CardSection = {
  args: {
    as: 'section',
    ref: null,
    style: {
      height: '552px',
      width: ' 420px',
    },
  },
} satisfies Story

export const StoryCardRef = {
  render: () => {
    const ref = useRef<ElementRef<'div'>>(null)

    return <Card as={'div'} ref={ref} style={{ height: '552px', width: ' 420px' }} />
  },
}
