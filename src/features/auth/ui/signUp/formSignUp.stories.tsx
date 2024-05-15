import type { Meta, StoryObj } from '@storybook/react'

import { ComponentType } from 'react'

import { path } from '@/common/enums'
import { FormForgotPassword, FormSignIn, FormSignUp, SignUp } from '@/features/auth'
import { omit } from 'remeda'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: FormSignUp,
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
