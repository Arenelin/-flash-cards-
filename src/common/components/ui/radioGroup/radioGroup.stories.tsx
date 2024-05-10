import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

// eslint-disable-next-line import/namespace
import { OptionRadio, RadioGroup } from './RadioGroup'

const meta = {
  component: RadioGroup,
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof RadioGroup>

const options: OptionRadio[] = [
  { label: 'Redux', value: 'Redux' },
  { label: 'Redux Toolkit', value: 'Redux Toolkit' },
  { label: 'RTK Query', value: 'RTC Query' },
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
        <RadioGroup onValueChange={onChangeHandler} options={args.options} />
        <div>{`value: ${value}`}</div>
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
