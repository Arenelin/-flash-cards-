import { ChangeEvent, KeyboardEvent, ReactNode, useState } from 'react'

import { InputType } from './Input'

// This function is a custom hook called useInput that is used for managing state and handling input text events in an
// input field.

type Type =
  | [
      (e: ChangeEvent<HTMLInputElement>) => void,
      (e: KeyboardEvent<HTMLInputElement>) => void,
      InputType,
      ReactNode,
    ]
  | [(e: ChangeEvent<HTMLInputElement>) => void, (e: KeyboardEvent<HTMLInputElement>) => void]
export const useInput = (
  onChangeText: (value: string) => void,
  onEnter: (() => void) | undefined,
  disabled: boolean | undefined,
  IconActive: ReactNode,
  IconNotActive: ReactNode
): Type => {
  const [active, setActive] = useState(false)

  const IconToggleButton = (
    <button disabled={disabled} onClick={() => setActive(prevActive => !prevActive)}>
      {active ? IconNotActive : IconActive}{' '}
    </button>
  )

  const type = active ? InputType.text : InputType.password

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeText?.(e.currentTarget.value)
  }
  const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.()
    }
  }

  //  In this return statement, we cannot do without a condition because our variable type has the InputType type and when
  //  returning without a condition, the type variable conflicts with undefined.
  if (IconActive && IconNotActive) {
    return [onChangeHandler, onKeyDownHandler, type, IconToggleButton]
  } else {
    return [onChangeHandler, onKeyDownHandler]
  }
}
