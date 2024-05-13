import { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword, FormForgotPassword } from './FormForgotPassword'

const meta = {
  component: FormForgotPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
} satisfies Meta<typeof FormForgotPassword>

export default meta
type Story = StoryObj<typeof FormForgotPassword>

const onSubmit = (data: ForgotPassword) => {
  alert(data.email)
}

export const FormForgotPasswordDefault = {
  args: {
    onSubmit: onSubmit,
  },
} satisfies Story
