import type { Meta, StoryObj } from '@storybook/react'

import {
  Edit2Outline,
  LogOutOutline,
  MoreVerticalOutline,
  PersonOutline,
  PlayCircleOutline,
  TrashOutline,
} from '@/assets/icons/components'
import { Dropdown } from '@/common/components/ui/dropdown/Dropdown'
import { DropdownSeparator } from '@/common/components/ui/dropdown/dropdownSeparator/DropdownSeparator'
import { ToolbarItemWithIcon } from '@/common/components/ui/dropdown/toolbarItemWithIcon/ToolbarItemWithIcon'
import { DefaultDescription } from '@/common/components/ui/dropdown/toolbarItemWithIcon/defaultDescription/DefaultDescription'
import { ToolbarItemWithUserData } from '@/common/components/ui/dropdown/toolbarItemWithUserData/ToolbarItemWithUserData'
import { UserAvatar } from '@/common/components/ui/userAvatar/UserAvatar'

const meta = {
  argTypes: {},
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
      <Dropdown triggerChild={<UserAvatar name={mockUserData.name} src={mockUserData.img} />}>
        <ToolbarItemWithUserData userData={mockUserData} />
        <DropdownSeparator />
        <ToolbarItemWithIcon
          icon={<PersonOutline />}
          onSelect={() => {
            alert('My Profile')
          }}
          textContent={<DefaultDescription text={'My Profile'} />}
        />
        <DropdownSeparator />

        <ToolbarItemWithIcon
          icon={<LogOutOutline />}
          onSelect={() => {
            alert('Sign Out')
          }}
          textContent={<DefaultDescription text={'Sign Out'} />}
        />
      </Dropdown>
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
      <Dropdown triggerChild={<UserAvatar name={mockUserData.name} />}>
        <ToolbarItemWithUserData userData={mockUserData} />
        <DropdownSeparator />
        <ToolbarItemWithIcon
          icon={<PersonOutline />}
          onSelect={() => {
            alert('My Profile')
          }}
          textContent={<DefaultDescription text={'My Profile'} />}
        />
        <DropdownSeparator />

        <ToolbarItemWithIcon
          icon={<LogOutOutline />}
          onSelect={() => {
            alert('Sign Out')
          }}
          textContent={<DefaultDescription text={'Sign Out'} />}
        />
      </Dropdown>
    )
  },
} satisfies Story

export const WithSettings = {
  render: () => {
    return (
      <Dropdown triggerChild={<MoreVerticalOutline />}>
        <ToolbarItemWithIcon
          icon={<PlayCircleOutline />}
          onSelect={() => {
            alert('Learn')
          }}
          textContent={<DefaultDescription text={'Learn'} />}
        />
        <DropdownSeparator />

        <ToolbarItemWithIcon
          icon={<Edit2Outline />}
          onSelect={() => {
            alert('Edit')
          }}
          textContent={<DefaultDescription text={'Edit'} />}
        />
        <DropdownSeparator />

        <ToolbarItemWithIcon
          icon={<TrashOutline />}
          onSelect={() => {
            alert('Delete')
          }}
          textContent={<DefaultDescription text={'Delete'} />}
        />
      </Dropdown>
    )
  },
} satisfies Story
