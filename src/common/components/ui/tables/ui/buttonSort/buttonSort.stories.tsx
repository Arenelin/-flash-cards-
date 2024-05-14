import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { ButtonSort } from '@/common/components/ui/tables/ui/buttonSort/ButtonSort'

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

type ButtonLogicStory = {
  onClick: () => void
  sort: boolean
}
const logicStoryButtonSort = (): ButtonLogicStory => {
  const [sort, setSort] = useState<boolean>(false)
  const onClick = () => {
    setSort(sort => !sort)
    alert('Logic sort')
  }

  return { onClick, sort }
}

export const SortUpdated = {
  render: () => {
    const { onClick, sort } = logicStoryButtonSort()

    return <ButtonSort onClick={onClick} sort={sort} text={'Last Updated'} />
  },
} satisfies Story

export const SortCreated = {
  render: () => {
    const { onClick, sort } = logicStoryButtonSort()

    return <ButtonSort onClick={onClick} sort={sort} text={'Created by'} />
  },
} satisfies Story
