import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ElementRef,
  KeyboardEvent,
  useId,
  useRef,
} from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { ImageOutline } from '@/assets/icons'
import { Typography } from '@/common/components'
import { Button } from '@/common/components/button/Button'

import s from './controlledInputFile.module.scss'

type ControlledInputFileProps<T extends FieldValues> = Omit<
  ComponentPropsWithoutRef<'input'>,
  'name' | 'onBlur' | 'onChange' | 'value'
> &
  UseControllerProps<T>

export const ControlledInputFile = <T extends FieldValues>(props: ControlledInputFileProps<T>) => {
  const { control, id, name, ...rest } = props
  //const ref = useRef<ElementRef<'input'> | null>(null)
  const ref = useRef<ElementRef<'label'> | null>(null)
  const idInput = useId()
  const finalId = id || idInput
  const {
    field: { onChange, value, ...field },
    fieldState: { error },
  } = useController({ control, name })
  const onEnterPress = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      ref.current?.click()
    }
  }
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.files && e.target.files[0])
  }

  return (
    <div>
      <Button fullWidth onKeyDown={onEnterPress} type={'button'} variant={'secondary'}>
        <label className={s.label} htmlFor={finalId} ref={ref}>
          <ImageOutline /> {value ? 'Cover Image' : 'Upload Image'}
          <input
            accept={'image/*'}
            className={s.file}
            type={'file'}
            {...field}
            {...rest}
            aria-label={'Upload Cover Image'}
            id={finalId}
            onChange={onChangeFile}
          />
        </label>
      </Button>
      {Boolean(error?.message) && (
        <Typography as={'span'} className={s.error} variant={'error'}>
          {error?.message}
        </Typography>
      )}
    </div>
  )
}
