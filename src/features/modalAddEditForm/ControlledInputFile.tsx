import { ComponentPropsWithoutRef, ElementRef, KeyboardEvent, useId, useRef } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { ImageOutline } from '@/assets/icons'
import { Button } from '@/common/components/ui'

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
  const { field } = useController({ control, name })
  const onEnterPress = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter') {
      ref.current?.click()
    }
  }

  //TODO Доделать обработку приходящего файла

  return (
    <Button fullWidth onKeyDown={onEnterPress} type={'button'} variant={'secondary'}>
      <label className={s.label} htmlFor={finalId} ref={ref}>
        <ImageOutline /> {field.value ? 'Cover Image' : 'Upload Image'}
        <input
          accept={'image/*'}
          className={s.file}
          type={'file'}
          {...field}
          {...rest}
          aria-label={'Upload Cover Image'}
          id={finalId}
        />
      </label>
    </Button>
  )
}
