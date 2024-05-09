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
  const { IconActive, IconNotActive, IconStart, disabled, onClickIconEnd, type } = parameters
  const [active, setActive] = useState(false)

  const onClickHandler = () => {
    if (IconNotActive) {
      setActive(prevActive => !prevActive)
    }
    if (onClickIconEnd) {
      onClickIconEnd()
    }
  }
  const Icon = (
    <button disabled={disabled} onClick={onClickHandler} type={'button'}>
      {active ? IconNotActive : IconActive}
    </button>
  )
  const IconEndOrIconToggle = IconActive ? Icon : undefined
  const isSearch = type === InputType.search
  const typeToggle = active ? InputType.text : InputType.password
  const baseTypeInput = IconNotActive ? typeToggle : type

  const inputIconStart = IconStart ? s.iconStart : ''
  const inputEndStart = IconActive ? s.iconEnd : ''
  const inputSearchIcon = isSearch ? s.search : ''
  const inputStyle = classNames(s.input, inputIconStart, inputEndStart, inputSearchIcon)

  return {
    IconEndOrIconToggle,
    baseTypeInput,
    inputStyle,
    isSearch,
  }
}
