import { ComponentPropsWithoutRef } from 'react'

import { Button, Modal, Typography } from '@/common/components/ui'

import s from './modalDelete.module.scss'

type ModalDeleteProps = {
  onOpenChange: (open: boolean) => void
  open: boolean
  text: string
  title: string
} & ComponentPropsWithoutRef<'div'>
export const ModalDelete = (props: ModalDeleteProps) => {
  const { onOpenChange, open, text, title } = props

  return (
    <Modal
      classTypography={s.classTypography}
      onOpenChange={onOpenChange}
      open={open}
      title={title}
    >
      <div className={s.container}>
        <Typography className={s.text} variant={'body1'}>
          {text}
        </Typography>
        <Button variant={'secondary'}>Cancel</Button>
        <Button variant={'primary'}>{title}</Button>
      </div>
    </Modal>
  )
}
