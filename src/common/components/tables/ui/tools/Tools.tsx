import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Edit2Outline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import classNames from 'classnames'

import s from '@/common/components/tables/ui/tools/tools.module.scss'

type ToolsProps = {
  canUsePlay?: boolean
  canUseTool?: boolean
  onDelete?: () => void
  onEdit?: () => void
  onPlay?: () => void
} & ComponentPropsWithoutRef<'div'>
export const Tools = forwardRef<ElementRef<'div'>, ToolsProps>(
  ({ canUsePlay = true, canUseTool = true, className, onDelete, onEdit, onPlay, ...rest }, ref) => {
    return (
      <div className={classNames(s.container, className)} ref={ref} {...rest}>
        {canUsePlay && (
          <button className={s.button} onClick={onPlay}>
            <PlayCircleOutline className={s.icon} />
          </button>
        )}
        {canUseTool && (
          <>
            <button className={s.button} onClick={onEdit}>
              <Edit2Outline className={s.icon} />
            </button>
            <button className={s.button} onClick={onDelete}>
              <TrashOutline className={s.icon} />
            </button>
          </>
        )}
      </div>
    )
  }
)

Tools.displayName = 'Tools'