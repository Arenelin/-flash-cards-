import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import CloseOutline from '@/assets/icons/components/CloseOutline'
import EyeOffOutline from '@/assets/icons/components/EyeOffOutline'
import EyeOutline from '@/assets/icons/components/EyeOutline'
import SearchOutline from '@/assets/icons/components/SearchOutline'

import { Input, InputType } from './Input'

const meta = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Text = {
  render: () => {
    const [value, setValue] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState<null | string>(null)

    const onChangeText = (value: string) => {
      setValue(value)
    }
    const onClickButton = () => {
      if (!value.trim()) {
        setError('Error!')
      } else {
        setText(value)
      }
    }
    const onEnter = () => {
      setText(value)
    }

    return (
      <>
        <Input
          errorMessage={error}
          label={'Input'}
          onChangeText={onChangeText}
          onEnter={onEnter}
          placeholder={'Input'}
          type={InputType.text}
          value={value}
        />
        <button onClick={onClickButton}>onClick</button>
        <div>{text}</div>
      </>
    )
  },
}

export const Password = {
  render: () => {
    const [value, setValue] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState<null | string>(null)

    const onChangeText = (value: string) => {
      setValue(value)
    }
    const onClickButton = () => {
      if (!value.trim()) {
        setError('Error!')
      } else {
        setText(value)
      }
    }
    const onEnter = () => {
      setText(value)
    }

    return (
      <>
        <Input
          errorMessage={error}
          iconEnd={<EyeOffOutline />}
          iconEndNotActive={<EyeOutline />}
          label={'Input'}
          onChangeText={onChangeText}
          onEnter={onEnter}
          placeholder={'Input'}
          type={InputType.password}
          value={value}
        />
        <button onClick={onClickButton}>onClick</button>
        <div>{text}</div>
      </>
    )
  },
}

export const Search = {
  render: () => {
    const [value, setValue] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState<null | string>(null)

    const onChangeText = (value: string) => {
      setValue(value)
    }
    const onClickButton = () => {
      if (!value.trim()) {
        setError('Error!')
      } else {
        setText(value)
      }
    }

    const onClearClick = () => {
      setValue('')
    }
    const onEnter = () => {
      setText(value)
    }

    return (
      <>
        <Input
          errorMessage={error}
          iconEnd={<CloseOutline />}
          iconStart={<SearchOutline />}
          onChangeText={onChangeText}
          onClearClick={onClearClick}
          onEnter={onEnter}
          placeholder={'Input search'}
          type={InputType.search}
          value={value}
        />
        <button onClick={onClickButton}>onClick</button>
        <div>{text}</div>
      </>
    )
  },
}
export const DisabledText = {
  args: {
    disabled: true,
    label: 'Disabled text field',
    onChangeText: () => {},
    placeholder: 'Input',
    type: InputType.text,
    value: '',
  },
} satisfies Story

export const DisabledPassword = {
  args: {
    disabled: true,
    iconEnd: <EyeOffOutline />,
    iconEndNotActive: <EyeOutline />,
    label: 'Disabled password text field',
    onChangeText: () => {},
    placeholder: 'Input',
    type: InputType.password,
    value: '',
  },
} satisfies Story

export const DisabledSearch = {
  args: {
    disabled: true,
    iconEnd: <CloseOutline />,
    iconStart: <SearchOutline />,
    onChangeText: () => {},
    placeholder: 'Input search',
    type: InputType.search,
    value: '',
  },
} satisfies Story

export const ErrorText = {
  args: {
    errorMessage: 'Some Error!!!',
    label: 'Error text field',
    onChangeText: () => {},
    placeholder: 'Input',
    type: InputType.text,
    value: '',
  },
} satisfies Story
export const ErrorPassword = {
  args: {
    errorMessage: 'Some Error!!!',
    iconEnd: <EyeOffOutline />,
    iconEndNotActive: <EyeOutline />,
    label: 'Error password text field',
    onChangeText: () => {},
    placeholder: 'Input',
    type: InputType.password,
    value: '',
  },
} satisfies Story

export const ErrorSearch = {
  args: {
    errorMessage: 'Some Error!!!',
    iconEnd: <CloseOutline />,
    iconStart: <SearchOutline />,
    onChangeText: () => {},
    placeholder: 'Input search',
    type: InputType.search,
    value: '',
  },
} satisfies Story
