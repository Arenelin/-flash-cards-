import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'
import { useForm } from 'react-hook-form'

import { ImageOutline } from '@/assets/icons'
import { Button, InputType, Modal } from '@/common/components/ui'
import { ControlledCheckbox, ControlledInput } from '@/common/components/ui/controlled'
import { zodResolver } from '@hookform/resolvers/zod'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { z } from 'zod'

import s from './modalNewDeck.module.scss'

type ModalProps = {
  onOpenChange: (open: boolean) => void
  onSubmit: (data: any) => void
  open: boolean
  title: string
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, 'onOpenChange' | 'open'>

const newDeckSchema = z.object({
  name: z.string().min(1).max(50),
  private: z.boolean().optional(),
})

export type NewDeck = z.infer<typeof newDeckSchema>
export const ModalNewDeck = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ModalProps>(
  (props, ref) => {
    const { onOpenChange, onSubmit, open, title } = props
    const { control, handleSubmit } = useForm<NewDeck>({ resolver: zodResolver(newDeckSchema) })
    const finalId = useId()

    return (
      <Modal onOpenChange={onOpenChange} open={open} ref={ref} title={title}>
        <form className={s.container} id={finalId} onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput
            className={s.input}
            control={control}
            label={'Name Pack'}
            name={'name'}
            placeholder={'Name'}
            type={InputType.text}
          />
          <Button fullWidth variant={'secondary'}>
            <ImageOutline /> Upload Image
          </Button>
          <ControlledCheckbox control={control} label={'Private pack'} name={'private'} />
          <div className={s.containerButton}>
            <Button onClick={() => onOpenChange(false)} type={'button'} variant={'secondary'}>
              Cancel
            </Button>
            <Button form={finalId} variant={'primary'}>
              Add New Pack
            </Button>
          </div>
        </form>
      </Modal>
    )
  }
)
