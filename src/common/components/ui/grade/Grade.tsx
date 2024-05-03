import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import { Star, StarOutline } from '@/assets/icons'
import classNames from 'classnames'

import s from './grade.module.scss'
type GradeScale = 0 | 1 | 2 | 3 | 4 | 5

type GradeProps = {
  currentGrade: GradeScale
} & ComponentPropsWithoutRef<'div'>

export const Grade = forwardRef<ElementRef<'div'>, GradeProps>(
  ({ className, currentGrade = 1, id, ...rest }, ref) => {
    const genID = useId()
    const finalId = id || genID
    const baseClassNames = {
      container: classNames(s.container, className),
      icon: s.icon,
    }
    const grade = 5
    const arrGrade = new Array(grade).fill(null)
    const arrCurrentGrade = arrGrade.map((_el, index) => {
      return index < currentGrade ? (
        <Star className={baseClassNames.icon} key={index} />
      ) : (
        <StarOutline className={baseClassNames.icon} key={index} />
      )
    })

    return (
      <div className={baseClassNames.container} ref={ref} {...rest} id={finalId}>
        {arrCurrentGrade}
      </div>
    )
  }
)
