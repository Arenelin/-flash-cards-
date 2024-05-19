import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { Pagination } from '@/common/components'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: Pagination,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({}),
  },
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof Pagination>

export const PaginationDemo = {
  render: () => {
    return (
      <Provider store={store}>
        <div style={{ backgroundColor: '#c3c1c7', padding: '200px' }}>
          <Pagination totalCount={2000} />
        </div>
      </Provider>
    )
  },
} satisfies Story
