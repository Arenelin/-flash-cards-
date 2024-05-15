import { ComponentType } from 'react'

import { path } from '@/common/enums'
import { ForgotPassword, FormForgotPassword, FormSignIn, FormSignUp } from '@/features/auth'
import { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: FormForgotPassword,
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
