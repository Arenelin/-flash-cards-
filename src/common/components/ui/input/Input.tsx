import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react'

import { Typography } from '@/common/components/ui'
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
  onClickIconEnd?: () => void
  type: InputType
}

export type InputProps = Omit<ComponentPropsWithoutRef<'input'>, keyof Props> & Props

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
    onClickIconEnd,
    type,
    ...inputProps
  } = props
  const genID = useId()
  const finalId = id || genID

  const { IconEndOrIconToggle, baseTypeInput, inputStyle, isSearch } = useInput({
    IconActive: IconEnd,
    IconNotActive: IconEndNotActive,
    IconStart,
    disabled,
    onClickIconEnd,
    type,
  })

  const showSearch = isSearch && Boolean(inputProps.value) && !errorMessage
  const showIconEnd = !isSearch && Boolean(IconEndOrIconToggle)

  return (
    <div className={s.box}>
      {Boolean(label) && (
        <label className={classNames(s.label, disabled ? s.labelDisabled : '')} htmlFor={finalId}>
          {label}
        </label>
      )}
      <div className={s.inputContainer}>
        <input
          className={classNames(inputStyle, errorMessage ? s.error : '', className)}
          disabled={disabled}
          id={finalId}
          ref={ref}
          type={baseTypeInput}
          {...inputProps}
        />
        {Boolean(IconStart) && <span className={classNames(s.icon, s.iconStart)}>{IconStart}</span>}
        {showSearch && (
          <span className={classNames(s.icon, s.iconEnd, isSearch ? s.search : '')}>
            {IconEndOrIconToggle}
          </span>
        )}
        {showIconEnd && (
          <span className={classNames(s.icon, s.iconEnd, isSearch ? s.search : '')}>
            {IconEndOrIconToggle}
          </span>
        )}
      </div>
      {Boolean(errorMessage) && (
        <Typography as={'span'} className={s.error}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
})

Input.displayName = 'Input'
