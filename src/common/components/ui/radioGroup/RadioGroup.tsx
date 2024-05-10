import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Option, Typography } from '@/common/components/ui'
import * as RadioGroupRadix from '@radix-ui/react-radio-group'

import s from './radioGroup.module.scss'

export type RadioGroupProps = {
  options: Option[]
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioGroupProps>(
  (props, ref) => {
    const { options, ...rest } = props

    return (
      <RadioGroupRadix.Root className={s.radioGroupRoot} ref={ref} {...rest}>
        {options.map((radio: Option, index: number) => {
          return (
            <div className={s.containerItem} key={index}>
              <RadioGroupRadix.Item className={s.item} id={radio.value} value={radio.value}>
                <RadioGroupRadix.Indicator className={s.radioGroupIndicator} />
              </RadioGroupRadix.Item>
              <Typography as={'label'} className={s.label} htmlFor={radio.value} variant={'body2'}>
                {radio.label}
              </Typography>
            </div>
          )
        })}
      </RadioGroupRadix.Root>
    )
  }
)

RadioGroup.displayName = 'RadioGroup'
