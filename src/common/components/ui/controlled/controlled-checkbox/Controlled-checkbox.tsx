import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '@/common/components/ui'

type ControlledCheckboxProps<T extends FieldValues> = Omit<CheckboxProps, 'onChange' | 'value'> &
  UseControllerProps<T>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({ control, defaultValue, name, rules, shouldUnregister })

  return <Checkbox {...{ checked: value, id: name, onChange, ...checkboxProps }} />
}
