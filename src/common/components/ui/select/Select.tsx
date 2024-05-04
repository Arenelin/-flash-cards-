import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef, useId } from 'react'

import Icon from '@/assets/icons/ArrowDown'
import { Typography } from '@/common/components/ui'
import * as SelectRadix from '@radix-ui/react-select'
import classNames from 'classnames'

import s from './select.module.scss'

type Option = {
  label: string
  value: string
}

type Props = {
  className?: string
  classNameTypography?: string
  id?: string
  label?: string
  onValueChange?: (value: string) => void
  options: Option[]
  placeholder?: ReactNode
  small?: boolean
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

type SelectProps = Omit<ComponentPropsWithoutRef<typeof SelectRadix.Root>, keyof Props> & Props

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, SelectProps>((props, ref) => {
  const {
    className,
    classNameTypography,
    disabled,
    id,
    label,
    onValueChange,
    options,
    placeholder,
    small = false,
    value,
    ...rest
  } = props
  const genID = useId()
  const finalId = id || genID

  const baseclassNames = {
    icon: classNames(s.icon, disabled ? s.iconDisabled : ''),
    item: classNames(s.item, small ? s.small : ''),
    trigger: classNames(s.trigger, disabled ? s.triggerDisabled : '', small ? s.small : ''),
    typography: classNames(s.label, disabled ? s.labelDisabled : '', classNameTypography),
  }

  return (
    <Typography as={'label'} className={baseclassNames.typography} variant={'body2'}>
      {label}
      <SelectRadix.Root onValueChange={onValueChange} value={value} {...rest}>
        <SelectRadix.Trigger
          aria-label={'select'}
          asChild
          className={baseclassNames.trigger}
          id={finalId}
          ref={ref}
        >
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
})
