import s from './userAvatar.module.scss'

type Props = {
  name?: string
  src?: string
}
export const UserAvatar = (props: Props) => {
  const { name = '', src } = props
  const imgSrc = src ? src : `https://ui-avatars.com/api/?name=${name}`

  return (
    <div className={s.container}>
      <img alt={'User photo'} className={s.img} src={imgSrc} />
    </div>
  )
}
