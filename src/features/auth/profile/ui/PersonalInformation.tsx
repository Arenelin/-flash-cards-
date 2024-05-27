import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Edit2, LogOut } from '@/assets/icons'
import { Button, Card, InputType, Typography, UserAvatar } from '@/common/components'
import { ControlledInput } from '@/common/components/controlled'
import { ControlledInputFile } from '@/common/components/controlled/controlledInputFile/ControlledInputFile'
import { schemaFile, text } from '@/common/utils/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './personalInformatuin.module.scss'

export type Props = {
  email: string
  imgSrc?: string
  name: string
  onSubmit: (data: ProfileFormData) => void
}

const profileSchema = z.object({
  avatar: z.union([schemaFile, z.string()]),
  name: text,
})

export type ProfileFormData = z.infer<typeof profileSchema>

export const PersonalInformation = ({ email, imgSrc, name, onSubmit }: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const { control, handleSubmit } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  })
  const formId = useId()
  const navigate = useNavigate()

  const nickNameHandler = (data: ProfileFormData) => {
    onSubmit(data)
    setIsEdit(!isEdit)
  }

  return (
    <Card className={s.card}>
      <Typography as={'h1'} className={s.classTitle} variant={'h1'}>
        Personal Information
      </Typography>
      <form id={formId} onSubmit={handleSubmit(nickNameHandler)}>
        {!isEdit ? (
          <div className={s.infoBlock}>
            <div className={s.userAvatar}>
              <UserAvatar name={name} src={imgSrc} />
            </div>
            <div className={s.nameBlock}>
              <Typography as={'h2'} variant={'h1'}>
                {name}
              </Typography>
              <Typography
                as={'button'}
                className={s.edit}
                onClick={() => setIsEdit(!isEdit)}
                variant={'h4'}
              >
                <Edit2 />
              </Typography>
            </div>
            <Typography as={'span'} className={s.email} variant={'body1'}>
              {email}
            </Typography>
            <Button
              fullWidth
              onClick={e => {
                e.preventDefault()
                navigate(-1)
              }}
              variant={'secondary'}
            >
              <LogOut /> Back
            </Button>
          </div>
        ) : (
          <div className={s.settingBlock}>
            <Typography as={'span'} className={s.email} variant={'body1'}>
              avatar
            </Typography>
            <div className={s.changeAvatar}>
              <ControlledInputFile
                control={control}
                defaultDeckImage={imgSrc || ''}
                name={'avatar'}
              />
            </div>

            <ControlledInput
              autoFocus
              className={s.input}
              control={control}
              defaultValue={name}
              label={'NickName'}
              name={'name'}
              type={InputType.text}
            />
            <Button className={s.saveButton} fullWidth>
              Save Changes
            </Button>
          </div>
        )}
      </form>
    </Card>
  )
}

PersonalInformation.displayName = 'PersonalInformation'
