import { ComponentPropsWithoutRef, ReactNode } from 'react'

import Icon from '@/assets/icons/components/ArrowDown'
import { Typography } from '@/common/components/ui/typography'
import * as SelectRadix from '@radix-ui/react-select'
import classNames from 'classnames'

import s from './select.module.scss'

type Option = {
  label: string
  value: string
}
type SelectProps = {
  className?: string
  defaultValue?: string
  disabled?: boolean
  label?: string
  onValueChange?: (value: string) => void
  options: Option[]
  placeholder?: ReactNode
  required?: boolean
  small?: boolean
  value?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>
export const Select = (props: SelectProps) => {
  const {
    className,
    defaultValue,
    disabled = false,
    label,
    onValueChange,
    options,
    placeholder,
    required,
    small = false,
    value,
  } = props

  return (
    <Typography
      as={'label'}
      className={classNames(s.label, disabled ? s.labelDisabled : '', className)}
      variant={'body2'}
    >
      {label}
      <SelectRadix.Root
        defaultValue={defaultValue}
        disabled={disabled}
        onValueChange={onValueChange}
        required={required}
        value={value}
      >
        <SelectRadix.Trigger
          aria-label={'select'}
          asChild
          className={classNames(s.trigger, disabled ? s.triggerDisabled : '', small ? s.small : '')}
        >
          <button>
            <SelectRadix.Value placeholder={placeholder} />
            <Icon className={classNames(s.icon, disabled ? s.iconDisabled : '')} name={'arrow'} />
          </button>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.content} position={'popper'}>
            <SelectRadix.Viewport>
              {options.map(el => (
                <SelectRadix.Item
                  className={classNames(s.item, small ? s.small : '')}
                  key={el.value}
                  value={el.value}
                >
                  <SelectRadix.ItemText>{el.label}</SelectRadix.ItemText>
                </SelectRadix.Item>
              ))}
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </Typography>
  )
}
