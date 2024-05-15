import type { Meta, StoryObj } from '@storybook/react'

import { ComponentType } from 'react'

import { NewPassword, NewPasswordForm } from '@/features/auth'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: NewPasswordForm,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      location: {
        path: '/newPassword',
      },
      routing: [
        {
          Component: NewPasswordForm as ComponentType<{}>,
          path: '/newPassword',
          useStoryElement: true,
        },
      ],
    }),
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
