import type { Meta, StoryObj } from '@storybook/react'

import { Dropdown } from '@/common/components/dropdown/Dropdown'
import { SettingsDropdown } from '@/common/components/dropdown/settingsDropdown/SettingsDropdown'
import UserDropdown from '@/common/components/dropdown/userDropdown/UserDropdown'

const meta = {
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Dropdown',
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof Dropdown>

export const WithUserDataWithAvatar = {
  render: () => {
    const mockUserData = {
      email: 'moroznaya2002@gmail.com',
      img: 'https://alex-artyukhin.ru/wp-content/uploads/2020/05/aleksej-kremnev2.jpg',
      name: 'Nikita',
    }

    return (
      <UserDropdown email={mockUserData.email} img={mockUserData.img} name={mockUserData.name} />
    )
  },
} satisfies Story
export const WithUserDataWithoutAvatar = {
  render: () => {
    const mockUserData = {
      email: 'moroznaya2002@gmail.com',
      img: '',
      name: 'Nikita',
    }

    return (
      <UserDropdown email={mockUserData.email} img={mockUserData.img} name={mockUserData.name} />
    )
  },
} satisfies Story

export const WithSettings = {
  render: () => {
    return <SettingsDropdown link={'#'} />
  },
} satisfies Story
