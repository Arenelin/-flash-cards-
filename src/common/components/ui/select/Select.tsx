import { ComponentPropsWithoutRef, ReactNode } from 'react'

import Icon from '@/assets/icons/ArrowDown'
import { Typography } from '@/common/components/ui'
import * as SelectRadix from '@radix-ui/react-select'
import classNames from 'classnames'

import s from './select.module.scss'

type Option = {
  label: string
  value: string
}
type SelectProps = {
  className?: string
  label?: string
  onValueChange?: (value: string) => void
  options: Option[]
  placeholder?: ReactNode
  small?: boolean
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = (props: SelectProps) => {
  const {
    className,
    disabled,
    label,
    onValueChange,
    options,
    placeholder,
    small = false,
    value,
    ...rest
  } = props
  const baseclassNames = {
    icon: classNames(s.icon, disabled ? s.iconDisabled : ''),
    item: classNames(s.item, small ? s.small : ''),
    trigger: classNames(s.trigger, disabled ? s.triggerDisabled : '', small ? s.small : ''),
    typography: classNames(s.label, disabled ? s.labelDisabled : '', className),
  }

  return (
    <Typography as={'label'} className={baseclassNames.typography} variant={'body2'}>
      {label}
      <SelectRadix.Root onValueChange={onValueChange} value={value} {...rest}>
        <SelectRadix.Trigger aria-label={'select'} asChild className={baseclassNames.trigger}>
          <button>
            <SelectRadix.Value placeholder={placeholder} />
            <Icon className={baseclassNames.icon} name={'arrow'} />
          </button>
        </SelectRadix.Trigger>
        <SelectRadix.Portal>
          <SelectRadix.Content className={s.content} position={'popper'}>
            <SelectRadix.Viewport>
              {options.map(el => (
                <SelectRadix.Item className={baseclassNames.item} key={el.value} value={el.value}>
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
