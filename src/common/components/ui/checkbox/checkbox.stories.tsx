import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from './Checkbox'

const meta = {
  argTypes: {},
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const CheckboxChecked = {
  args: {
    checked: true,
  },
} satisfies Story

export const CheckboxNotChecked = {
  args: {
    checked: false,
  },
} satisfies Story

export const CheckboxCheckedDisabled = {
  args: {
    checked: true,
    disabled: true,
  },
} satisfies Story

export const CheckboxNotCheckedDisabled = {
  args: {
    checked: false,
    disabled: true,
  },
} satisfies Story

export const CheckboxToggles = {
  render: () => {
    const [checked, setChecked] = useState(false)
    const onChangeHandler = () => setChecked(!checked)

    return <Checkbox checked={checked} onChange={onChangeHandler} />
  },
} satisfies Story

const label = 'Checkbox-box'

export const CheckboxTogglesWithLabel = {
  args: { label },
  render: args => {
    const [checked, setChecked] = useState(false)
    const onChangeHandler = () => setChecked(!checked)

    return <Checkbox checked={checked} label={args.label} onChange={onChangeHandler} />
  },
} satisfies Story
