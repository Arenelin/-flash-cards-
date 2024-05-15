import { ComponentType } from 'react'

import { path } from '@/common/enums'
import { Error } from '@/features/error/Error'
import { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: Error,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({
      location: {
        path: path.error,
      },
      routing: [{ Component: Error as ComponentType<{}>, path: path.error, useStoryElement: true }],
    }),
  },
  tags: ['autodocs'],
  title: 'Features/Error',
} satisfies Meta<typeof Error>

export default meta
type Story = StoryObj<typeof Error>

export const ErrorStories = {} satisfies Story
