import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/common/components/ui'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export type Option = {
  label: string
  value: string
}

type Props = {
  onChange?: (value: string) => void
  options: Option[]
}

type RadioGroupProps = Omit<ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>, keyof Props> &
  Props
export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupProps>(
  (props, ref) => {
    const { disabled, onChange, options, ...rest } = props

    const radioGroups = options.map((radio: Option, index: number) => {
      const onChangeHandler = () => {
        if (onChange) {
          onChange(radio.value)
        }
      }

      return (
        <div className={s.containerItem} key={index}>
          <RadioGroupRadix.Item
            className={s.radioGroupItem}
            id={radio.value}
            onChange={onChangeHandler}
            value={radio.value}
          >
            <RadioGroupRadix.Indicator className={s.radioGroupIndicator} />
          </RadioGroupRadix.Item>
          {Boolean(radio.label) && (
            <Typography as={'label'} className={s.label} htmlFor={radio.value} variant={'body2'}>
              {radio.label}
            </Typography>
          )}
        </div>
      )
    })

    return (
      <RadioGroupRadix.Root
        aria-label={'View density'}
        className={s.radioGroupRoot}
        defaultValue={'default'}
        disabled={disabled}
        ref={ref}
        {...rest}
      >
        {radioGroups}
      </RadioGroupRadix.Root>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
