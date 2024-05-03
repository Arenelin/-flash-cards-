import { Typography } from '@/common/components/ui'

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
