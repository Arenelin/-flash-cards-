import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect, useId, useState } from 'react'
import { useForm } from 'react-hook-form'

import defaultCardImage from '@/assets/defaultCardImage.jpeg'
import { Button, InputType, Modal, Select, Typography } from '@/common/components'
import { ControlledInput } from '@/common/components/controlled'
import { ControlledInputFile } from '@/common/components/controlled/controlledInputFile/ControlledInputFile'
import { CardUpdateBody } from '@/common/types'
import { schemaFile, text } from '@/common/utils/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { z } from 'zod'

import s from './modalCard.module.scss'

type DataKey = keyof CardForm

type ModalProps = {
  defaultValues?: CardUpdateBody
  onOpenChange: (open: boolean) => void
  onSubmit: (data: CardForm) => void
  open: boolean
  title: string
} & Omit<ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, 'onOpenChange' | 'open'>

const CardSchema = z.object({
  answer: text,
  answerImg: z.union([schemaFile, z.string(), z.null()]).optional(),
  question: text,
  questionImg: z.union([schemaFile, z.string(), z.null()]).optional(),
})

export type CardForm = z.infer<typeof CardSchema>
export const ModalCard = forwardRef<ElementRef<typeof DialogPrimitive.Content>, ModalProps>(
  (props, ref) => {
    const { defaultValues, onOpenChange, onSubmit, open, title } = props
    const [valueSelect, setValueSelect] = useState('Text')

    const { control, getValues, handleSubmit, reset } = useForm<CardForm>({
      defaultValues: {},
      resolver: zodResolver(CardSchema),
    })

    useEffect(() => {
      if (defaultValues) {
        reset(defaultValues)
        const startValue = defaultValues.questionImg || defaultValues.answerImg ? 'Image' : 'Text'

        setValueSelect(startValue)
      } else {
        reset()
        setValueSelect('Text')
      }
    }, [reset, defaultValues, open])

    const finalId = useId()

    const onOpenChangeHandler = () => {
      onOpenChange(false)
    }

    const onHandleSubmit = (data: CardForm) => {
      if (defaultValues) {
        const currentValues = getValues()

        for (const key in defaultValues) {
          if (defaultValues[key as DataKey] === currentValues[key as DataKey]) {
            delete data[key as DataKey]
          }
        }
      }

      onSubmit(data)

      onOpenChange(false)
      reset()
      setValueSelect('Text')
    }

    const onValueChange = (value: string) => {
      setValueSelect(value)
    }

    const isImage = valueSelect !== 'Text'

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
              value={valueSelect}
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
              <Button onClick={onOpenChangeHandler} type={'button'} variant={'secondary'}>
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
