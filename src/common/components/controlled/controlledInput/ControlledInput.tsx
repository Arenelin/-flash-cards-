import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Input, InputProps } from '@/common/components'

type ControlledInputProps<T extends FieldValues> = Omit<
  InputProps,
  'name' | 'onBlur' | 'onChange' | 'value'
> &
  UseControllerProps<T>

export const ControlledInput = <T extends FieldValues>(props: ControlledInputProps<T>) => {
  const { control, name, ...rest } = props

  const {
    field,
    fieldState: { error },
  } = useController({ control, name })

  return <Input {...field} {...rest} errorMessage={error?.message} />
}
