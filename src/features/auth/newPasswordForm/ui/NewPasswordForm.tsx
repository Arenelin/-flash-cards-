import { useId } from 'react'
import { useForm } from 'react-hook-form'

import { EyeOffOutline, EyeOutline } from '@/assets/icons'
import { Button, Card, InputType, Typography } from '@/common/components'
import { ControlledInput } from '@/common/components/controlled'
import { passwordSchema } from '@/common/utils/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/features/auth/newPasswordForm/ui/newPasswordForm.module.scss'

export default {}
type NewPasswordFormProps = {
  onSubmit: (data: NewPassword) => void
}

const newPasswordSchema = z.object({ password: passwordSchema })

export type NewPassword = z.infer<typeof newPasswordSchema>
export const NewPasswordForm = ({ onSubmit }: NewPasswordFormProps) => {
  const { control, handleSubmit } = useForm<NewPassword>({
    resolver: zodResolver(newPasswordSchema),
  })
  const formId = useId()

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'h1'}>
        Create new password
      </Typography>
      <form className={s.form} id={formId} onSubmit={handleSubmit(onSubmit)}>
        <ControlledInput
          className={s.input}
          control={control}
          iconEnd={<EyeOffOutline />}
          iconEndNotActive={<EyeOutline />}
          label={'Password'}
          name={'password'}
          placeholder={'password'}
          type={InputType.password}
        />
        <Typography className={s.notificationText} variant={'body2'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button form={formId} fullWidth>
          Create New Password
        </Button>
      </form>
    </Card>
  )
}

NewPasswordForm.displayName = 'NewPasswordForm'
