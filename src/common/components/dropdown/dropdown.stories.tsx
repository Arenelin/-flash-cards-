import type { Meta, StoryObj } from '@storybook/react'

import { Edit2Outline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { Dropdown } from '@/common/components/dropdown/Dropdown'
import { DropdownItem } from '@/common/components/dropdown/dropdownItem/DropdownItem'
import { DefaultDescription } from '@/common/components/dropdown/dropdownItem/defaultDescription/DefaultDescription'
import { DropdownSeparator } from '@/common/components/dropdown/dropdownSeparator/DropdownSeparator'
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
      name: 'Arenelin',
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
      name: 'Arenelin',
    }

    return (
      <UserDropdown email={mockUserData.email} img={mockUserData.img} name={mockUserData.name} />
    )
  },
} satisfies Story

export const WithSettings = {
  render: () => {
    return (
      <Dropdown trigger={<MoreVerticalOutline />}>
        <DropdownItem onSelect={() => alert('Learn')}>
          <PlayCircleOutline />
          <DefaultDescription text={'Learn'} />
        </DropdownItem>

        <DropdownSeparator />
        <DropdownItem onSelect={() => alert('Edit')}>
          <Edit2Outline />
          <DefaultDescription text={'Edit'} />
        </DropdownItem>

        <DropdownSeparator />
        <DropdownItem onSelect={() => alert('Delete')}>
          <TrashOutline />
          <DefaultDescription text={'Delete'} />
        </DropdownItem>
      </Dropdown>
    )
  },
} satisfies Story
