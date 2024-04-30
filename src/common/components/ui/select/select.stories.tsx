import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select'

const meta = {
  argTypes: { onValueChange: { action: 'select changes' } },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof Select>

const options = [
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' },
  { label: 'label3', value: 'value3' },
  { label: 'label4', value: 'value4' },
  { label: 'label5', value: 'value5' },
]

export const Default = {
  args: {
    label: 'Select-box',
    options,
    placeholder: 'Select Default',
  },
} satisfies Story

export const Small = {
  args: {
    options,
    placeholder: 'Select Small',
    small: true,
  },
} satisfies Story

export const Disabled = {
  args: {
    disabled: true,
    options,
    placeholder: 'Select Disabled',
  },
} satisfies Story
