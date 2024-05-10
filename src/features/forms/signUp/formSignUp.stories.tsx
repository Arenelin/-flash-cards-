import type { Meta, StoryObj } from '@storybook/react'

import { FormSignUp, SignUp } from '@/features/forms'
import { omit } from 'remeda'

const meta = {
  component: FormSignUp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/FormSignUp',
} satisfies Meta<typeof FormSignUp>

export default meta
type Story = StoryObj<typeof FormSignUp>

const onSubmit = (data: SignUp) => {
  console.log(omit(data, ['confirmPassword']))
}

export const SignUpForm = {
  args: {
    onSubmit: onSubmit,
  },
} satisfies Story
