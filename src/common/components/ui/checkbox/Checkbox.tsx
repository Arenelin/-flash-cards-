import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { CheckboxIcon } from '@/assets/icons'
import { Typography } from '@/common/components/ui'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import classNames from 'classnames'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  (props, ref) => {
    const { checked, className, disabled, id, label, ...rest } = props
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
            ref={ref}
            {...rest}
          >
            <CheckboxRadix.Indicator className={s.checkboxIndicator}>
              <CheckboxIcon className={s.icon} />
            </CheckboxRadix.Indicator>
          </CheckboxRadix.Root>
        </div>
        {Boolean(label) && (
          <Typography
            as={'label'}
            className={classNames(s.label, disabled ? s.disabled : '')}
            htmlFor={finalId}
            variant={'body2'}
          >
            {label}
          </Typography>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
