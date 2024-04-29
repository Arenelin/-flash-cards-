import { ChangeEvent, KeyboardEvent, ReactNode, useState } from 'react'

import { InputType } from './Input'

type useInputReturnType = {
  IconEndOrIconToggle?: ReactNode
  onChangeHandler?: (e: ChangeEvent<HTMLInputElement>) => void
  onKeyDownHandler?: (e: KeyboardEvent<HTMLInputElement>) => void
  typeToggle?: InputType | undefined
}
type useInputParameters = {
  IconActive?: ReactNode
  IconNotActive?: ReactNode
  disabled?: boolean
  onChange?: (value: string) => void
  onClickIconEnd?: () => void
  onKeyDown?: () => void
}
export const useInput = (parameters: useInputParameters): useInputReturnType => {
  const { IconActive, IconNotActive, disabled, onChange, onClickIconEnd, onKeyDown } = parameters
  const [active, setActive] = useState(false)

  const onClickHandler = () => {
    setActive(prevActive => !prevActive)
    if (onClickIconEnd) {
      onClickIconEnd()
    }
  }
  const IconToggleButton = (
    <button disabled={disabled} onClick={onClickHandler}>
      {active ? IconNotActive : IconActive}
    </button>
  )
  const IconEndOrIconToggle = IconNotActive ? IconToggleButton : IconActive
  const type = active ? InputType.text : InputType.password
  const typeToggle = IconNotActive ? type : undefined

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onKeyDown?.()
    }
  }

  return { IconEndOrIconToggle, onChangeHandler, onKeyDownHandler, typeToggle }
}
