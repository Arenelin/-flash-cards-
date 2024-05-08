import type { Meta, StoryObj } from '@storybook/react'

import { useForm } from 'react-hook-form'

import { InputType } from '@/common/components/ui'

import { ControlledInput } from './Controlled-input'

const meta = {
  argTypes: {},
  component: ControlledInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof ControlledInput>

export default meta
type Story = StoryObj<typeof ControlledInput>

export const TextInput = {
  render: () => {
    const { handleSubmit, register } = useForm()
    const onSubmit = (data: any) => {
      console.log(data)
    }

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          {...register('email')}
          label={'Input'}
          placeholder={'Input'}
          type={InputType.text}
        />
      </form>
    )
  },
} satisfies Story
