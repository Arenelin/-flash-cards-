import type { Meta, StoryObj } from '@storybook/react'

import { ComponentType } from 'react'

import { path } from '@/common/enums'
import { FormForgotPassword, FormSignIn, FormSignUp, SignIn } from '@/features/auth'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: FormSignIn,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      location: {
        path: path.signIn,
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
  title: 'Auth/FormSignIn',
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
