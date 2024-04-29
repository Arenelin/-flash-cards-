import { ChangeEvent, KeyboardEvent, ReactNode, useState } from 'react'

import classNames from 'classnames'

import s from '@/common/components/ui/input/input.module.scss'

import { InputType } from './Input'

type useInputReturnType = {
  IconEndOrIconToggle?: ReactNode
  baseTypeInput?: InputType
  inputStyle: string
  isSearch: boolean
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDownHandler?: (e: KeyboardEvent<HTMLInputElement>) => void
}
type useInputParameters = {
  IconActive?: ReactNode
  IconNotActive?: ReactNode
  IconStart?: ReactNode
  disabled?: boolean
  onChange?: (value: string) => void
  onClickIconEnd?: () => void
  onKeyDown?: () => void
  type: InputType
}
export const useInput = (parameters: useInputParameters): useInputReturnType => {
  const {
    IconActive,
    IconNotActive,
    IconStart,
    disabled,
    onChange,
    onClickIconEnd,
    onKeyDown,
    type,
  } = parameters
  const [active, setActive] = useState(false)

  const onClickHandler = () => {
    if (IconNotActive) {
      setActive(prevActive => !prevActive)
    }
    if (onClickIconEnd) {
      onClickIconEnd()
    }
  }
  const IconEndOrIconToggle = (
    <button disabled={disabled} onClick={onClickHandler}>
      {active ? IconNotActive : IconActive}
    </button>
  )
  const isSearch = type === InputType.search
  const typeToggle = active ? InputType.text : InputType.password
  const baseTypeInput = IconNotActive ? typeToggle : type

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onKeyDown?.()
    }
  }
  const inputIconStart = IconStart ? s.iconStart : ''
  const inputEndStart = IconActive ? s.iconEnd : ''
  const inputSearchIcon = isSearch ? s.search : ''
  const inputStyle = classNames(s.input, inputIconStart, inputEndStart, inputSearchIcon)

  return {
    IconEndOrIconToggle,
    baseTypeInput,
    inputStyle,
    isSearch,
    onChangeHandler,
    onKeyDownHandler,
  }
}
