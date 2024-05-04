import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import CheckboxIcon from '@/assets/icons/CheckboxIcon'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

type Props = {
  label?: string
  onChange?: (checked: boolean) => void
}

type CheckboxProps = Omit<ComponentPropsWithoutRef<typeof CheckboxRadix.Root>, keyof Props> & Props
export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (props, ref) => {
    const { checked, className, disabled, id, label, onChange, ...rest } = props
    const genID = useId()
    const finalId = id || genID

    return (
      <div className={s.container}>
        <div className={s.wrapperChecked}>
          <CheckboxRadix.Root
            checked={checked}
            className={s.checkboxRoot}
            disabled={disabled}
            id={finalId}
            onCheckedChange={onChange}
            ref={ref}
            {...rest}
          >
            <CheckboxRadix.Indicator className={s.checkboxIndicator}>
              <CheckboxIcon className={s.icon} />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {Boolean(label) && (
          <label className={s.label} htmlFor={finalId}>
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
