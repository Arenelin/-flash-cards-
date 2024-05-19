import type { Meta, StoryObj } from '@storybook/react'

import { ButtonSort } from '@/common/components/tables/ui/buttonSort/ButtonSort'

const meta = {
  component: ButtonSort,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tables/ButtonSort',
} satisfies Meta<typeof ButtonSort>

export default meta
type Story = StoryObj<typeof ButtonSort>

export const SortUpdated = {
  render: () => {
    const onClick = () => {
      alert('Logic sort')
    }

    return (
      <div style={{ backgroundColor: 'black', padding: '100px' }}>
        <ButtonSort onClick={onClick} text={'Last Updated'} />
      </div>
    )
  },
} satisfies Story

export const SortCreated = {
  render: () => {
    const onClick = () => {
      alert('Logic sort')
    }

    return (
      <div style={{ backgroundColor: 'black', padding: '100px' }}>
        <ButtonSort onClick={onClick} text={'Created by'} />
      </div>
    )
  },
} satisfies Story
