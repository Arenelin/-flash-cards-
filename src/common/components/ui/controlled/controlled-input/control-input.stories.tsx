import type { Meta, StoryObj } from '@storybook/react'

import { useForm } from 'react-hook-form'

import EyeOffOutline from '@/assets/icons/EyeOffOutline'
import EyeOutline from '@/assets/icons/EyeOutline'
import { InputType } from '@/common/components/ui'

import { ControlledInput } from './Controlled-input'

const meta = {
  component: ControlledInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/ControlledInput',
} satisfies Meta<typeof ControlledInput>

export default meta
type Story = StoryObj<typeof ControlledInput>

type FormType = {
  email: string
  password: string
}
export const ControlledInputs = {
  render: () => {
    const { control, handleSubmit } = useForm<FormType>()
    const onSubmit = (data: any) => {
      console.log(data)
    }

    return (
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <ControlledInput
          control={control}
          label={'Email'}
          name={'email'}
          placeholder={'email'}
          type={InputType.text}
        />
        <ControlledInput
          control={control}
          iconEnd={<EyeOffOutline />}
          iconEndNotActive={<EyeOutline />}
          label={'Password'}
          name={'password'}
          placeholder={'password'}
          type={InputType.password}
        />
        <button type={'submit'}>Submit</button>
      </form>
    )
  },
} satisfies Story
