import type { Meta, StoryObj } from '@storybook/react'

import { omit } from 'remeda'

import { FormSignUp, SignUp } from './FormSignUp'

const meta = {
  component: FormSignUp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Auth/FormSignUp',
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
