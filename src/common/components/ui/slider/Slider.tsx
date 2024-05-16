import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Typography } from '@/common/components/ui'
import * as SliderRadix from '@radix-ui/react-slider'
import classNames from 'classnames'

import s from './slider.module.scss'

type SliderProps = {
  label: string
  onValueChange: (value: number[]) => void
  value: number[]
} & ComponentPropsWithoutRef<typeof SliderRadix.Root>

export const Slider = forwardRef<ElementRef<typeof SliderRadix.Root>, SliderProps>((props, ref) => {
  const { className, label, onValueChange, value, ...rest } = props

  return (
    <div className={s.container}>
      <Typography variant={'body2'}>{label}</Typography>
      <div className={s.sliderContainer}>
        <Typography as={'span'} className={s.value} variant={'body1'}>
          {value[0]}
        </Typography>
        <SliderRadix.Root
          className={classNames(s.slider, className)}
          onValueChange={onValueChange}
          ref={ref}
          value={value}
          {...rest}
        >
          <SliderRadix.Track className={s.track}>
            <SliderRadix.Range className={s.range} />
          </SliderRadix.Track>
          <SliderRadix.Thumb className={s.thumb} />
          <SliderRadix.Thumb className={s.thumb} />
        </SliderRadix.Root>
        <Typography as={'span'} className={s.value} variant={'body1'}>
          {value[1]}
        </Typography>
      </div>
    </div>
  )
})

Slider.displayName = 'Slider'
