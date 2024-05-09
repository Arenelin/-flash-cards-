import { useState } from 'react'

import { Edit2, LogOut } from '@/assets/icons'
import { Button, Card, Input, InputType, Typography, UserAvatar } from '@/common/components/ui'

import s from '@/features/personalInformation/personalInformatuin.module.scss'

export type PersonalInformationProps = {
  email: string
  imgSrc?: string
  name: string
  nickNameChange: (newNickName: string) => void
}
export const PersonalInformation = ({
  email,
  imgSrc,
  name,
  nickNameChange,
}: PersonalInformationProps) => {
  const [isEdit, setIsEdit] = useState(false)
  const [newNickName, setNewNickName] = useState(name)

  const newNickNameHandler = () => {
    nickNameChange(newNickName)
    setIsEdit(!isEdit)
  }

  return (
    <Card className={s.card}>
      <Typography as={'h2'} className={s.classTitle} variant={'h1'}>
        Personal Information
      </Typography>
      <div className={s.userAvatar}>
        {/*TODO make userAvatar editable*/}
        <UserAvatar name={name} src={imgSrc} />
      </div>
      {!isEdit ? (
        <div className={s.infoBlock}>
          <div className={s.nameBlock}>
            <Typography as={'h2'} variant={'h1'}>
              {newNickName}
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
          <Input
            autoFocus
            className={s.input}
            label={'NickName'}
            name={'nickName'}
            onChange={e => setNewNickName(e.currentTarget.value)}
            placeholder={newNickName}
            type={InputType.text}
          />
          <Button className={s.saveButton} fullWidth onClick={newNickNameHandler}>
            Save Changes
          </Button>
        </div>
      )}
    </Card>
  )
}
