import type { Meta, StoryObj } from '@storybook/react'

import { Layout } from '@/features/layout/Layout'
import { Page } from '@/router/ui/page/Page'

const meta = {
  argTypes: {},
  component: Layout,
  tags: ['autodocs'],
  title: 'Features/Layout',
} satisfies Meta<typeof Layout>

export default meta
type Story = StoryObj<typeof Layout>

export const LayoutStory = {
  args: {
    children: (
      <Page marginTop={'60px'} style={{ backgroundColor: '#bea6ff' }}>
        <span>
          Routes are perhaps the most important part of a React Router app. They couple URL segments
          to components, data loading and data mutations. Through route nesting, complex application
          layouts and data dependencies become simple and declarative.
        </span>
      </Page>
    ),
  },
} satisfies Story
