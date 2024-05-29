import type { Meta, StoryObj } from '@storybook/react'

import { withRouter } from 'storybook-addon-remix-react-router'

import { PersonalInformation, ProfileFormData } from './PersonalInformation'

const meta = {
  argTypes: {},
  component: PersonalInformation,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/Profile',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof PersonalInformation>
const onSubmit = (data: ProfileFormData) => {
  alert(data.name)
}

export const PersonalInformationDemo = {
  args: {
    email: 'free@samuraijs.com',
    imgSrc: 'https://i.pinimg.com/736x/6e/2f/88/6e2f886a234cefdb5b680763dbc53b4b.jpg',
    name: 'Emilia',
    onSubmit: onSubmit,
  },
} satisfies Story
