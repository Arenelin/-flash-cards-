import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { NavLink } from 'react-router-dom'

import defaultDeckImg from '@/assets/defaultDeckImage.jpeg'
import { Typography } from '@/common/components'
import { Deck } from '@/common/types'

import s from '@/common/components/tables/ui/containerName/containerName.module.scss'

type ContainerNameProps = {
  data: Deck
  link: string
} & ComponentPropsWithoutRef<'a'>
export const ContainerName = forwardRef<ElementRef<'a'>, ContainerNameProps>((props, ref) => {
  const { data, link, ...rest } = props

  return (
    <NavLink className={s.link} ref={ref} to={link} {...rest}>
      <div className={s.container}>
        <img alt={'Image Deck'} className={s.img} src={data.cover || defaultDeckImg} />
        <Typography className={s.text}>{data.name}</Typography>
      </div>
    </NavLink>
  )
})

ContainerName.displayName = 'ContainerName'
