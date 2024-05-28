import { Typography } from '@/common/components'

import s from './defaultDescription.module.scss'

type Props = {
  text: string
}
export const DefaultDescription = (props: Props) => {
  const { text } = props

  return (
    <Typography as={'span'} className={s.text} variant={'caption'}>
      {text}
    </Typography>
  )
}

DefaultDescription.displayName = 'DefaultDescription'
