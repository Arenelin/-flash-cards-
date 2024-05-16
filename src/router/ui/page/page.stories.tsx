import type { Meta, StoryObj } from '@storybook/react'

import { Page } from '@/router/ui/page/Page'

const meta = {
  component: Page,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Router/Page',
} satisfies Meta<typeof Page>

export default meta
type Story = StoryObj<typeof Page>

export const PageStory = {
  args: {
    children: (
      <div>
        Routes are perhaps the most important part of a React Router app. They couple URL segments
        to components, data loading and data mutations. Through route nesting, complex application
        layouts and data dependencies become simple and declarative.
      </div>
    ),
    marginTop: '100px',
    style: { backgroundColor: '#ff8099' },
  },
} satisfies Story
