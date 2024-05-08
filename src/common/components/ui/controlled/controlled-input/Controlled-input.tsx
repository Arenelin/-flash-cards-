import { Input, InputProps } from '@/common/components/ui'

type ControlledCheckboxProps = {} & InputProps

export const ControlledInput = (props: ControlledCheckboxProps) => {
  return <Input {...props} />
}
