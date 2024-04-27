import { ComponentPropsWithoutRef, ReactNode } from 'react'

import s from './input.module.scss'

import { useIcon } from './useIcon'

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
  const [onChangeHandler, onKeyDownHandler, typePassword, IconActiveNow] = useIcon(
    onChangeText,
    onEnter,
    isDisabled,
    iconEnd,
    iconEndNotActive
  )
  const isSearch = type === InputType.search
  const styleInputWithIcon = isSearch ? `${s.input} ${s.search}` : `${s.input} ${s.password}`
  const styleInput = iconStart || IconActiveNow ? styleInputWithIcon : `${s.input}`
  const styleInputCommon = errorMessage ? `${styleInput} ${s.error}` : `${styleInput}`
  const styleIconEnd = isSearch ? `${s.iconEnd} ${s.search}` : `${s.iconEnd}`
  const styleLabel = disabled ? `${s.label} ${s.labelDisabled}` : `${s.label}`

  return (
    <div className={s.box}>
      {label && <label className={styleLabel}>{label}</label>}
      <div className={s.inputContainer}>
        <input
          className={styleInputCommon}
          disabled={disabled}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          type={typePassword || type}
          value={value}
          {...rest}
        />
        {iconStart && <span className={s.iconStart}>{iconStart}</span>}
        {IconActiveNow && <span className={styleIconEnd}>{IconActiveNow}</span>}
        {isSearch && value?.trim() && (
          <button className={styleIconEnd} onClick={onClearClick}>
            {iconEnd}
          </button>
        )}
      </div>
      {errorMessage?.length !== 0 && <span className={s.error}>{errorMessage}</span>}
    </div>
  )
}
