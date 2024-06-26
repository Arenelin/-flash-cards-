import type { Meta, StoryObj } from '@storybook/react'

import { UserAvatar } from '@/common/components/userAvatar/UserAvatar'

const meta = {
  argTypes: {},
  component: UserAvatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/UserAvatar',
} satisfies Meta<typeof UserAvatar>

export default meta
type Story = StoryObj<typeof UserAvatar>

export const WithAvatar = {
  render: () => {
    const userName = 'Emilia'
    const img = 'https://i.pinimg.com/736x/6e/2f/88/6e2f886a234cefdb5b680763dbc53b4b.jpg'

    return <UserAvatar name={userName} src={img} />
  },
} satisfies Story
export const WithoutAvatar = {
  render: () => {
    const userName = 'Emilia'

    return <UserAvatar name={userName} />
  },
} satisfies Story
