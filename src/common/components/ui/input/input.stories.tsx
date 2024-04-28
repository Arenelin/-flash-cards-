import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { PersonOutline, PlayCircle } from '@/assets/icons/components'
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
export const TextInput = {
  render: () => {
    const [value, setValue] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState<null | string>(null)

    const onChangeHandler = (value: string) => {
      setValue(value)
    }
    const onClick = () => {
      if (!value.trim()) {
        setError('Error!')
      } else {
        setText(value)
      }
    }
    const onKeyDownHandler = () => {
      setText(value)
    }

    return (
      <>
        <Input
          errorMessage={error}
          label={'Input'}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          placeholder={'Input'}
          type={InputType.text}
          value={value}
        />
        <button onClick={onClick}>onClick</button>
        <div>{text}</div>
      </>
    )
  },
}

export const PasswordInput = {
  render: () => {
    const [value, setValue] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState<null | string>(null)

    const onChangeHandler = (value: string) => {
      setValue(value)
    }
    const onClick = () => {
      if (!value.trim()) {
        setError('Error!')
      } else {
        setText(value)
      }
    }
    const onKeyDownHandler = () => {
      setText(value)
    }

    return (
      <>
        <Input
          errorMessage={error}
          iconEnd={<EyeOffOutline />}
          iconEndNotActive={<EyeOutline />}
          label={'Input'}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          placeholder={'Input'}
          type={InputType.password}
          value={value}
        />
        <button onClick={onClick}>onClick</button>
        <div>{text}</div>
      </>
    )
  },
}

export const SearchInput = {
  render: () => {
    const [value, setValue] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState<null | string>(null)

    const onChangeHandler = (value: string) => {
      setValue(value)
    }
    const onClick = () => {
      if (!value.trim()) {
        setError('Error!')
      } else {
        setText(value)
      }
    }

    const onClearClick = () => {
      setValue('')
    }
    const onKeyDownHandler = () => {
      setText(value)
    }

    return (
      <>
        <Input
          errorMessage={error}
          iconEnd={<CloseOutline />}
          iconStart={<SearchOutline />}
          onChange={onChangeHandler}
          onClickIconEnd={onClearClick}
          onKeyDown={onKeyDownHandler}
          placeholder={'Input search'}
          type={InputType.search}
          value={value}
        />
        <button onClick={onClick}>onClick</button>
        <div>{text}</div>
      </>
    )
  },
}
export const DisabledText = {
  args: {
    disabled: true,
    label: 'Disabled text field',
    placeholder: 'Input',
    type: InputType.text,
  },
} satisfies Story

export const DisabledPassword = {
  args: {
    disabled: true,
    iconEnd: <EyeOffOutline />,
    iconEndNotActive: <EyeOutline />,
    label: 'Disabled password text field',
    placeholder: 'Input',
    type: InputType.password,
  },
} satisfies Story

export const DisabledSearch = {
  args: {
    disabled: true,
    iconEnd: <CloseOutline />,
    iconStart: <SearchOutline />,
    placeholder: 'Input search',
    type: InputType.search,
  },
} satisfies Story

export const ErrorText = {
  args: {
    errorMessage: 'Some Error!!!',
    label: 'Error text field',
    placeholder: 'Input',
    type: InputType.text,
  },
} satisfies Story
export const ErrorPassword = {
  args: {
    errorMessage: 'Some Error!!!',
    iconEnd: <EyeOffOutline />,
    iconEndNotActive: <EyeOutline />,
    label: 'Error password text field',
    placeholder: 'Input',
    type: InputType.password,
  },
} satisfies Story

export const ErrorSearch = {
  args: {
    errorMessage: 'Some Error!!!',
    iconEnd: <CloseOutline />,
    iconStart: <SearchOutline />,
    placeholder: 'Input search',
    type: InputType.search,
  },
} satisfies Story

//Here are some examples of using the input with different types of icons
export const MultiPurposeInputIconStart = {
  args: {
    iconStart: <PersonOutline />,
    label: 'MultiPurposeInput',
    placeholder: 'Input',
    type: InputType.text,
  },
} satisfies Story

export const MultiPurposeInputIconEnd = {
  args: {
    iconEnd: <PlayCircle />,
    label: 'MultiPurposeInput',
    placeholder: 'Input',
    type: InputType.text,
  },
} satisfies Story
