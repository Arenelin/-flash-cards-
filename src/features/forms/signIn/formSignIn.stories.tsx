import type { Meta, StoryObj } from '@storybook/react'

import { FormSignIn, SignIn } from '@/features/forms'

const meta = {
  argTypes: {},
  component: FormSignIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/FormSignIn',
} satisfies Meta<typeof FormSignIn>

export default meta
type Story = StoryObj<typeof FormSignIn>
const onSubmit = (data: SignIn) => {
  console.log(data)
}

export const StorySignIn = {
  args: {
    onSubmit: onSubmit,
  },
} satisfies Story
