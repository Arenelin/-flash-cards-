import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { TrashOutline } from '@/assets/icons/components'
import Edit2Outline from '@/assets/icons/components/Edit2Outline'
import PlayCircleOutline from '@/assets/icons/components/PlayCircleOutline'
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
