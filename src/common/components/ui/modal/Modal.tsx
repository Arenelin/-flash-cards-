import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import { Close } from '@/assets/icons'
import { Typography } from '@/common/components/ui'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import s from './modal.module.scss'

export type ModalProps = {
  children: ReactNode
  classTypography?: string
  onOpenChange: (open: boolean) => void
  open: boolean
  title?: string
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, 'onOpenChange' | 'open'>
export const Modal = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ModalProps>(
  ({ children, classTypography, title, ...props }, ref) => {
    return (
      <DialogPrimitive.Root {...props}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className={s.overlay} />
          <DialogPrimitive.Content className={s.content} ref={ref}>
            <div className={s.header}>
              <DialogPrimitive.Title asChild>
                <Typography as={'h2'} className={classTypography} variant={'h2'}>
                  {title}
                </Typography>
              </DialogPrimitive.Title>
              <DialogPrimitive.Close className={s.closeButton}>
                <Close />
              </DialogPrimitive.Close>
            </div>
            {children}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    )
  }
)

Modal.displayName = 'Modal'
