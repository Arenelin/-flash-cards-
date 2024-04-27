import { ChangeEvent, KeyboardEvent, ReactNode, useState } from 'react'

import { InputType } from './Input'

type UseIconReturnType =
  | [
      (e: ChangeEvent<HTMLInputElement>) => void,
      (e: KeyboardEvent<HTMLInputElement>) => void,
      InputType,
      ReactNode,
    ]
  | [(e: ChangeEvent<HTMLInputElement>) => void, (e: KeyboardEvent<HTMLInputElement>) => void]
export const useIcon = (
  onChangeText: (value: string) => void,
  onEnter: (() => void) | undefined,
  disabled: boolean | undefined,
  IconActive: ReactNode,
  IconNotActive: ReactNode
): UseIconReturnType => {
  const [active, setActive] = useState(false)

  const IconActiveNow = (
    <button disabled={disabled} onClick={() => setActive(prevActive => !prevActive)}>
      {active ? IconNotActive : IconActive}{' '}
    </button>
  )

  const type = active ? InputType.text : InputType.password

  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeText?.(e.currentTarget.value)
  }
  const onKeyDownCallBack = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.()
    }
  }

  if (IconActive && IconNotActive) {
    return [onChangeCallback, onKeyDownCallBack, type, IconActiveNow]
  } else {
    return [onChangeCallback, onKeyDownCallBack]
  }
}
