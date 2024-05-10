import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Edit2, LogOut } from '@/assets/icons'
import { Button, Card, InputType, Typography, UserAvatar } from '@/common/components/ui'
import { ControlledInput } from '@/common/components/ui/controlled/controlled-input/Controlled-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/features/personalInformation/personalInformatuin.module.scss'

export type Props = {
  email: string
  imgSrc?: string
  name: string
  onSubmit: (data: FormData) => void
}

const loginSchema = z.object({
  nickName: z.string(),
})

export type FormData = z.infer<typeof loginSchema>

export const PersonalInformation = ({ email, imgSrc, name, onSubmit }: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  const { control, handleSubmit } = useForm<FormData>({ resolver: zodResolver(loginSchema) })
  const formId = useId()

  const nickNameHandler = (data: FormData) => {
    onSubmit(data)
    setIsEdit(!isEdit)
  }

  return (
    <Card className={s.card}>
      <Typography as={'h1'} className={s.classTitle} variant={'h1'}>
        Personal Information
      </Typography>
      <form id={formId} onSubmit={handleSubmit(nickNameHandler)}>
        <div className={s.userAvatar}>
          {/*TODO make userAvatar editable*/}
          <UserAvatar name={name} src={imgSrc} />
        </div>
        {!isEdit ? (
          <div className={s.infoBlock}>
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

            <Typography as={'span'} className={s.email} variant={'body2'}>
              {email}
            </Typography>
            <Typography as={'button'} className={s.logout}>
              <LogOut /> &nbsp;&nbsp; Logout
              {/*TODO logout logic*/}
            </Typography>
          </div>
        ) : (
          <div>
            <ControlledInput
              autoFocus
              className={s.input}
              control={control}
              label={'NickName'}
              name={'nickName'}
              placeholder={name}
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
