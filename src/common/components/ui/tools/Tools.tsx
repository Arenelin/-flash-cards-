import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { Edit2Outline, PlayCircleOutline, TrashOutline } from '@/assets/icons/components'
import classNames from 'classnames'

import s from './tools.module.scss'

type ToolsProps = {
  canUseTool: boolean
} & ComponentPropsWithoutRef<'div'>
export const Tools = forwardRef<ElementRef<'div'>, ToolsProps>(
  ({ canUseTool, className, id, ...rest }, ref) => {
    const genID = useId()
    const finalId = id || genID
    const baseClassNames = {
      container: classNames(s.container, className),
      icon: s.iconc,
    }

    return (
      <div className={baseClassNames.container} id={finalId} ref={ref} {...rest}>
        {canUseTool && <PlayCircleOutline className={baseClassNames.icon} />}
        <Edit2Outline className={baseClassNames.icon} />
        <TrashOutline className={baseClassNames.icon} />
      </div>
    )
  }
)
