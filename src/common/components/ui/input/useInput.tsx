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
  onKeyDown?: () => void
}
export const useInput = (parameters: useInputParameters): useInputReturnType => {
  const { IconActive, IconNotActive, disabled, onChange, onKeyDown } = parameters
  const [active, setActive] = useState(false)

  const IconToggleButton = (
    <button disabled={disabled} onClick={() => setActive(prevActive => !prevActive)}>
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
