import type { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation } from '@/features/personalInformation/PersonalInformation'

const meta = {
  argTypes: {},
  component: PersonalInformation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Features/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof PersonalInformation>
const onSubmit = (data: string) => {
  alert(data)
}

export const PersonalInformationDemo = {
  args: {
    email: 'free@samuraijs.com',
    imgSrc: 'https://i.pinimg.com/736x/6e/2f/88/6e2f886a234cefdb5b680763dbc53b4b.jpg',
    name: 'Unknown woman',
    nickNameChange: onSubmit,
  },
} satisfies Story
