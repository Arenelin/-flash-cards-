import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { useInputStyle } from '@/common/components/ui/input/useInputStyle'
import classNames from 'classnames'

import s from './input.module.scss'

import { useInput } from './useInput'
// This component represents an input field with various props such as type, value, label, icon, error message,
// and event handlers. It uses a custom hook called useInput to handle input text events and state management.
export enum InputType {
  password = 'password',
  search = 'search',
  text = 'text',
}

type InputProps = {
  errorMessage?: null | string
  iconEnd?: ReactNode
  iconEndNotActive?: ReactNode
  iconStart?: ReactNode
  label?: string
  onChange?: (value: string) => void
  onClickIconEnd?: () => void
  onKeyDown?: () => void
  type: InputType
  value: string
}

type Props = InputProps & Omit<ComponentPropsWithoutRef<'input'>, keyof InputProps>

export const Input = (props: Props) => {
  const {
    className,
    disabled,
    errorMessage,
    iconEnd: IconEnd,
    iconEndNotActive: IconEndNotActive,
    iconStart: IconStart,
    label,
    onChange,
    onClickIconEnd,
    onKeyDown,
    type,
    value,
    ...rest
  } = props

  const isDisabled = !!(disabled || errorMessage) //disabled || errorMessage ? true : false
  const { IconEndOrIconToggle, onChangeHandler, onKeyDownHandler, typeToggle } = useInput({
    IconActive: IconEnd,
    IconNotActive: IconEndNotActive,
    disabled: isDisabled,
    onChange,
    onClickIconEnd,
    onKeyDown,
  })

  const isSearch = type === InputType.search
  const inputStyle = useInputStyle({
    iconEnd: IconEndOrIconToggle,
    iconStart: IconStart,
    isSearch,
    type: type || typeToggle,
  })
  const baseInputStyle = classNames(inputStyle, errorMessage ? s.error : '')
  const iconEndStyle = classNames(s.icon, s.iconEnd, isSearch ? s.search : '')
  const labelStyle = classNames(s.label, disabled ? s.labelDisabled : '')
  const BaseIconEnd = <span className={iconEndStyle}>{IconEndOrIconToggle}</span>

  return (
    <div className={s.box}>
      {label && <label className={labelStyle}>{label}</label>}
      <div className={s.inputContainer}>
        <input
          className={classNames(baseInputStyle, className)}
          disabled={disabled}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          type={typeToggle || type}
          value={value}
          {...rest}
        />
        {IconStart && <span className={classNames(s.icon, s.iconStart)}>{IconStart}</span>}
        {isSearch && value && !errorMessage ? BaseIconEnd : !isSearch && BaseIconEnd}
      </div>
      {!!errorMessage && <span className={s.error}>{errorMessage}</span>}
    </div>
  )
}
