import type { Meta, StoryObj } from '@storybook/react'

import { NewPassword, NewPasswordForm } from '@/features/auth'

const meta = {
  component: NewPasswordForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/NewPasswordForm',
} satisfies Meta<typeof NewPasswordForm>

export default meta
type Story = StoryObj<typeof NewPasswordForm>

const onSubmit = (data: NewPassword) => {
  console.log(data)
}

export const SignUpForm = {
  args: {
    onSubmit: onSubmit,
  },
} satisfies Story
