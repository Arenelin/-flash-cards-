import type { Meta, StoryObj } from '@storybook/react'

import React, { ChangeEvent, useState } from 'react'

import CloseOutline from '@/assets/icons/CloseOutline'
import EyeOffOutline from '@/assets/icons/EyeOffOutline'
import EyeOutline from '@/assets/icons/EyeOutline'
import PersonOutline from '@/assets/icons/PersonOutline'
import PlayCircle from '@/assets/icons/PlayCircle'
import SearchOutline from '@/assets/icons/SearchOutline'

import { Input, InputType } from './Input'

const meta = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof Input>

const buildStoryBook = () => {
  const [value, setValue] = useState('')
  const [error, setError] = useState<null | string>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !value.trim()) {
      setError('error')
    } else if (typeof error === 'string') {
      setError(null)
    }
  }
  const onClearClick = () => {
    setValue('')
  }

  return { error, onChangeHandler, onClearClick, onKeyDownHandler, setError, setValue, value }
}

export const TextInput = {
  render: () => {
    const { error, onChangeHandler, onKeyDownHandler, value } = buildStoryBook()

    return (
      <Input
        errorMessage={error}
        label={'Input'}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        placeholder={'Input'}
        type={InputType.text}
        value={value}
      />
    )
  },
} satisfies Story

export const PasswordInput = {
  render: () => {
    const { error, onChangeHandler, onKeyDownHandler, value } = buildStoryBook()

    return (
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
    )
  },
} satisfies Story

export const SearchInput = {
  render: () => {
    const { error, onChangeHandler, onClearClick, onKeyDownHandler, value } = buildStoryBook()

    return (
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
    )
  },
} satisfies Story
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
