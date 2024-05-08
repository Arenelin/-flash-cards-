import type { Meta, StoryObj } from '@storybook/react'

import { ElementRef, useRef } from 'react'

import { Card } from '@/common/components/ui/card/Card'

const meta = {
  argTypes: {},
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
    const ref = useRef<ElementRef<'section'>>(null)

    return <Card as={'section'} ref={ref} style={{ height: '552px', width: ' 420px' }} />
  },
}
