import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Button, Modal, Typography } from '@/common/components/ui'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import s from './modalDelete.module.scss'

type ModalDeleteProps = {
  onDelete: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
  text: string
  title: string
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, 'onOpenChange' | 'open'>
export const ModalDelete = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ModalDeleteProps>(
  (props, ref) => {
    const { onDelete, onOpenChange, open, text, title } = props

    return (
      <Modal
        classTypography={s.classTypography}
        onOpenChange={onOpenChange}
        open={open}
        ref={ref}
        title={title}
      >
        <div className={s.container}>
          <Typography className={s.text} variant={'body1'}>
            {text}
          </Typography>
          <Button onClick={() => onOpenChange(false)} variant={'secondary'}>
            Cancel
          </Button>
          <Button onClick={onDelete} variant={'primary'}>
            {title}
          </Button>
        </div>
      </Modal>
    )
  }
)
