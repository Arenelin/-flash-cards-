import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect, useId } from 'react'
import { useForm } from 'react-hook-form'

import defaultDeckImage from '@/assets/defaultDeckImage.jpeg'
import { Button, InputType, Modal } from '@/common/components'
import { ControlledCheckbox, ControlledInput } from '@/common/components/controlled'
import { ControlledInputFile } from '@/common/components/controlled/controlledInputFile/ControlledInputFile'
import { schemaFile, text } from '@/common/utils/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { z } from 'zod'

import s from './modalDeck.module.scss'

type EditData = {
  cover: null | string | undefined
  name: string
  private: boolean
}

type DataKey = keyof EditDeck

type ModalProps = {
  defaultValues?: EditData
  onOpenChange: (open: boolean) => void
  onSubmit: (data: EditDeck) => void
  open: boolean
  title: string
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, 'onOpenChange' | 'open'>

const newDeckSchema = z.object({
  cover: z.union([schemaFile, z.string(), z.null()]).optional(),
  name: text.optional(),
  private: z.boolean().optional(),
})

export type EditDeck = z.infer<typeof newDeckSchema>
export const ModalDeck = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ModalProps>(
  (props, ref) => {
    const { defaultValues, onOpenChange, onSubmit, open, title } = props
    const { control, getValues, handleSubmit, reset } = useForm<EditDeck>({
      defaultValues: {},
      resolver: zodResolver(newDeckSchema),
    })

    useEffect(() => {
      if (defaultValues) {
        reset(defaultValues)
      } else {
        reset()
      }
    }, [reset, defaultValues, open])

    const finalId = useId()

    const onOpenChangeHandler = () => {
      onOpenChange(false)
    }

    const onHandleSubmit = (data: EditDeck) => {
      if (defaultValues) {
        const currentValues = getValues()

        for (const key in defaultValues) {
          if (defaultValues[key as DataKey] === currentValues[key as DataKey]) {
            data[key as DataKey] = undefined
          }
        }
      }

      onSubmit(data)
      reset()
      onOpenChange(false)
    }

    return (
      <Modal onOpenChange={onOpenChange} open={open} ref={ref} title={title}>
        <form className={s.container} id={finalId} onSubmit={handleSubmit(onHandleSubmit)}>
          <ControlledInput
            className={s.input}
            control={control}
            label={'Name Pack'}
            name={'name'}
            placeholder={'Name'}
            type={InputType.text}
          />
          <ControlledInputFile
            control={control}
            defaultDeckImage={defaultDeckImage}
            name={'cover'}
          />
          <ControlledCheckbox control={control} label={'Private pack'} name={'private'} />
          <div className={s.containerButton}>
            <Button onClick={onOpenChangeHandler} type={'button'} variant={'secondary'}>
              Cancel
            </Button>
            <Button form={finalId} variant={'primary'}>
              {title}
            </Button>
          </div>
        </form>
      </Modal>
    )
  }
)

ModalDeck.displayName = 'ModalDeck'
