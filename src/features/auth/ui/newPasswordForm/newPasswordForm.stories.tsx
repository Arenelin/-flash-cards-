import type { Meta, StoryObj } from '@storybook/react'

import { ComponentType } from 'react'

import { path } from '@/common/enums'
import {
  FormForgotPassword,
  FormSignIn,
  FormSignUp,
  NewPassword,
  NewPasswordForm,
} from '@/features/auth'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: NewPasswordForm,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      location: {
        path: path.forgotPassword,
      },
      routing: [
        { Component: FormSignIn as ComponentType<{}>, path: path.signIn, useStoryElement: true },
        { Component: FormSignUp as ComponentType<{}>, path: path.signUp, useStoryElement: true },
        {
          Component: FormForgotPassword as ComponentType<{}>,
          path: path.forgotPassword,
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
