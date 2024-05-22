import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId, useState } from 'react'
import { useForm } from 'react-hook-form'

import defaultCardImage from '@/assets/defaultCardImage.jpeg'
import { Button, InputType, Modal, Select, Typography } from '@/common/components'
import { ControlledInput } from '@/common/components/controlled'
import { ControlledInputFile } from '@/common/components/controlled/controlledInputFile/ControlledInputFile'
import { schemaFile, text } from '@/common/utils/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { z } from 'zod'

import s from './modalCard.module.scss'

type EditData = {
  answer: string
  answerImg: null | string | undefined
  question: string
  questionImg: null | string | undefined
}

type ModalProps = {
  data?: EditData
  onOpenChange: (open: boolean) => void
  onSubmit: (data: EditDeck) => void
  open: boolean
  title: string
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, 'onOpenChange' | 'open'>

const newDeckSchema = z.object({
  answer: text,
  answerImg: z.union([schemaFile, z.string()]),
  question: text,
  questionImg: z.union([schemaFile, z.string()]),
})

export type EditDeck = z.infer<typeof newDeckSchema>
export const ModalCard = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ModalProps>(
  (props, ref) => {
    const { data, onOpenChange, onSubmit, open, title } = props
    const startValue = data?.questionImg || data?.answerImg ? 'Image' : 'Text'
    const [value, setOnValueChange] = useState(startValue)
    const { control, handleSubmit } = useForm<EditDeck>({
      defaultValues: {
        answer: data?.answer,
        answerImg: data?.answerImg,
        question: data?.question,
        questionImg: data?.questionImg,
      },
      resolver: zodResolver(newDeckSchema),
    })
    const finalId = useId()

    const onHandleSubmit = (data: EditDeck) => {
      onSubmit(data)
      onOpenChange(false)
    }

    const onValueChange = (value: string) => {
      setOnValueChange(value)
    }

    const isImage = value !== 'Text'

    return (
      <Modal onOpenChange={onOpenChange} open={open} ref={ref} title={title}>
        <div className={s.container}>
          <div className={s.select}>
            <Select
              label={'Choose A Question Format'}
              onValueChange={onValueChange}
              options={[
                { label: 'Text', value: 'Text' },
                { label: 'Image', value: 'Image' },
              ]}
              value={value}
            />
          </div>
          <form className={s.form} id={finalId} onSubmit={handleSubmit(onHandleSubmit)}>
            <div className={s.item}>
              <Typography variant={'subtitle2'}>Question:</Typography>
              <ControlledInput
                className={s.input}
                control={control}
                label={'Question'}
                name={'question'}
                placeholder={'Name'}
                type={InputType.text}
              />
              {isImage && (
                <ControlledInputFile
                  control={control}
                  defaultDeckImage={defaultCardImage}
                  name={'questionImg'}
                />
              )}
            </div>
            <div className={s.item}>
              <Typography variant={'subtitle2'}>Answer:</Typography>
              <ControlledInput
                className={s.input}
                control={control}
                label={'Answer'}
                name={'answer'}
                placeholder={'Name'}
                type={InputType.text}
              />
              {isImage && (
                <ControlledInputFile
                  control={control}
                  defaultDeckImage={defaultCardImage}
                  name={'answerImg'}
                />
              )}
            </div>

            <div className={s.containerButton}>
              <Button onClick={() => onOpenChange(false)} type={'button'} variant={'secondary'}>
                Cancel
              </Button>
              <Button form={finalId} variant={'primary'}>
                {title}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    )
  }
)

ModalCard.displayName = 'ModalCard'
