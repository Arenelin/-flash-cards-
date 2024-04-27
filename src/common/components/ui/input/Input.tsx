import { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './input.module.scss'

import { useInput } from './useInput'

// This component represents an input field with various props such as type, value, label, icon, error message,
// and event handlers. It uses a custom hook called useInput to handle input text events and state management.
export enum InputType {
  'password' = 'password',
  'search' = 'search',
  'text' = 'text',
}

type InputProps = {
  disabled?: boolean
  errorMessage?: null | string
  iconEnd?: ReactNode
  iconEndNotActive?: ReactNode
  iconStart?: ReactNode
  label?: string
  onChangeText: (value: string) => void
  onClearClick?: () => void
  onEnter?: () => void
  type: InputType
  value: string
}

type Props = InputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>

export const Input = (props: Props) => {
  const {
    className,
    disabled,
    errorMessage,
    iconEnd,
    iconEndNotActive,
    iconStart,
    label,
    onChangeText,
    onClearClick,
    onEnter,
    type,
    value,
    ...rest
  } = props

  const isDisabled = !!(disabled || errorMessage) //disabled || errorMessage ? true : false
  const [onChangeHandler, onKeyDownHandler, typePassword, IconToggleButton] = useInput(
    onChangeText,
    onEnter,
    isDisabled,
    iconEnd,
    iconEndNotActive
  )
  const isSearch = type === InputType.search
  const inputStyleWithIcon = `${s.input} ${isSearch ? s.search : s.password}`
  const inputStyle = iconStart || IconToggleButton ? inputStyleWithIcon : s.input
  const baseInputStyle = `${inputStyle} ${errorMessage && s.error}`
  const iconEndStyle = `${s.iconEnd} ${isSearch && s.search}`
  const labelStyle = `${s.label} ${disabled && s.labelDisabled}`

  return (
    <div className={s.box}>
      {label && <label className={labelStyle}>{label}</label>}
      <div className={s.inputContainer}>
        <input
          className={baseInputStyle}
          disabled={disabled}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          type={typePassword || type}
          value={value}
          {...rest}
        />
        {iconStart && <span className={s.iconStart}>{iconStart}</span>}
        {IconToggleButton && <span className={iconEndStyle}>{IconToggleButton}</span>}
        {isSearch && value?.trim() && (
          <button className={iconEndStyle} onClick={onClearClick}>
            {iconEnd}
          </button>
        )}
      </div>
      {!!errorMessage && <span className={s.error}>{errorMessage}</span>}
    </div>
  )
}
