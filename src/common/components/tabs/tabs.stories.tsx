import { useState } from 'react'

import { Meta } from '@storybook/react'

import { Tabs } from './Tabs'

const meta = {
  component: Tabs,
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta

const tabs = [
  { text: 'First', value: 'First' },
  { text: 'Second', value: 'Second' },
  { text: 'Third', value: 'Third' },
  { disabled: true, text: 'Disabled', value: 'disabled' },
]

export const Default = {
  render: () => {
    const [value, setValue] = useState('myCards')

    return (
      <div>
        <Tabs onValueChange={setValue} tabs={tabs} value={value} />
        <p style={{ marginTop: '20px' }}>changed value: {value}</p>
      </div>
    )
  },
}
