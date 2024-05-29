import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/common/components'

export type Props<T extends FieldValues> = Omit<RadioGroupProps, 'id' | 'onChange'> &
  UseControllerProps<T>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, ...field },
  } = useController({
    control,
    name,
  })

  return <RadioGroup {...rest} {...field} id={name} onValueChange={onChange} />
}

ControlledRadioGroup.displayName = 'ControlledRadioGroup'
