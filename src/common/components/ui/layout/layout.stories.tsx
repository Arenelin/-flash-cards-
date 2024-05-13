import type { Meta, StoryObj } from '@storybook/react'

import { Layout } from '@/common/components/ui/layout/Layout'
import { Page } from '@/common/components/ui/page/Page'

const meta = {
  argTypes: {},
  component: Layout,
  tags: ['autodocs'],
  title: 'Components/Layout',
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
