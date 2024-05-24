import type { Meta, StoryObj } from '@storybook/react'

import { ButtonSort } from '@/common/components/tables/ui/buttonSort/ButtonSort'
import { useStoryButtonSort } from '@/common/hooks/stotybookHooks/useStoryButtonSort'

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
    const { onSort, sort } = useStoryButtonSort()

    return (
      <div style={{ backgroundColor: 'black', padding: '100px' }}>
        <ButtonSort onSort={onSort} sort={sort} text={'Last Updated'} />
      </div>
    )
  },
} satisfies Story

export const SortCreated = {
  render: () => {
    const { onSort, sort } = useStoryButtonSort()

    return (
      <div style={{ backgroundColor: 'black', padding: '100px' }}>
        <ButtonSort onSort={onSort} sort={sort} text={'Created by'} />
      </div>
    )
  },
} satisfies Story
