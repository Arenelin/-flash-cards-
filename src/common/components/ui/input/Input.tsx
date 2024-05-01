import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react'

import { Typography } from '@/common/components'
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

type Props = {
  errorMessage?: null | string
  iconEnd?: ReactNode
  iconEndNotActive?: ReactNode
  iconStart?: ReactNode
  label?: string
  onChange?: (value: string) => void
  onClickIconEnd?: () => void
  onKeyDown?: () => void
  type: InputType
}

type InputProps = Omit<ComponentPropsWithoutRef<'input'>, keyof Props> & Props

export const Input = forwardRef<ElementRef<'input'>, InputProps>((props, ref) => {
  const {
    className,
    disabled,
    errorMessage,
    iconEnd: IconEnd,
    iconEndNotActive: IconEndNotActive,
    iconStart: IconStart,
    id,
    label,
    onChange,
    onClickIconEnd,
    onKeyDown,
    type,
    ...inputProps
  } = props
  const genID = useId()
  const finalId = id || genID
  const isDisabled = Boolean(disabled || errorMessage)

  const {
    IconEndOrIconToggle,
    baseTypeInput,
    inputStyle,
    isSearch,
    onChangeHandler,
    onKeyDownHandler,
  } = useInput({
    IconActive: IconEnd,
    IconNotActive: IconEndNotActive,
    IconStart,
    disabled: isDisabled,
    onChange,
    onClickIconEnd,
    onKeyDown,
    type,
  })
  const baseClassNames = {
    error: s.error,
    iconEndStyle: classNames(s.icon, s.iconEnd, isSearch ? s.search : ''),
    inputStyle: classNames(inputStyle, errorMessage ? s.error : ''),
    labelStyle: classNames(s.label, disabled ? s.labelDisabled : ''),
  }

  const BaseIconEnd = <span className={baseClassNames.iconEndStyle}>{IconEndOrIconToggle}</span>

  return (
    <div className={s.box}>
      {Boolean(label) && (
        <label className={baseClassNames.labelStyle} htmlFor={finalId}>
          {label}
        </label>
      )}
      <div className={s.inputContainer}>
        <input
          className={classNames(baseClassNames.inputStyle, className)}
          disabled={disabled}
          id={finalId}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          ref={ref}
          type={baseTypeInput}
          {...inputProps}
        />
        {Boolean(IconStart) && <span className={classNames(s.icon, s.iconStart)}>{IconStart}</span>}
        {isSearch && Boolean(inputProps.value) && !errorMessage
          ? BaseIconEnd
          : !isSearch && BaseIconEnd}
      </div>
      {Boolean(errorMessage) && (
        <Typography as={'span'} className={baseClassNames.error}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})
