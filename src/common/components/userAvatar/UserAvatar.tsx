import { forwardRef } from 'react'

import s from './userAvatar.module.scss'

type Props = {
  name?: string
  src?: string
}
export const UserAvatar = forwardRef<HTMLDivElement, Props>(({ name = '', src }, ref) => {
  const imgSrc = src ? src : `https://ui-avatars.com/api/?name=${name}`

  return (
    <div className={s.container} ref={ref}>
      <p className={s.name}>{name}</p>
      <img alt={'User photo'} className={s.img} src={imgSrc} />
    </div>
  )
})

UserAvatar.displayName = 'UserAvatar'
