import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Option, RadioGroup } from './radioGroup'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof RadioGroup>

const options: Option[] = [
  { label: 'Redux', value: 'redux' },
  { label: 'Redux Toolkit', value: 'redux toolkit' },
  { label: 'RTK Query', value: 'rtc query' },
]

export const RadioGroupToggle = {
  args: { options },
  render: args => {
    const [value, setValue] = useState('')
    const onChangeHandler = (value: string) => {
      setValue(value)
    }

    return (
      <div style={{ display: 'flex', gap: '50px' }}>
        <RadioGroup onChange={onChangeHandler} options={args.options} />
        <div>{value}</div>
      </div>
    )
  },
} satisfies Story

export const RadioGroupDisabled = {
  args: {
    disabled: true,
    options: options,
  },
} satisfies Story
