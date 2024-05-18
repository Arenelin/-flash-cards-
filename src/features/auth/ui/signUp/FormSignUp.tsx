import { useId } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { EyeOffOutline, EyeOutline } from '@/assets/icons'
import { Button, Card, InputType, Typography } from '@/common/components'
import { ControlledInput } from '@/common/components/controlled'
import { path } from '@/common/enums'
import { emailSchema, passwordSchema } from '@/common/utils/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/features/auth/ui/signUp/formSignUp.module.scss'

type Props = {
  onSubmit: (data: SignUp) => void
}

const registrationSchema = z
  .object({
    confirmPassword: passwordSchema,
    email: emailSchema,
    password: passwordSchema,
  })
  .refine(
    values => {
      return values.password === values.confirmPassword
    },
    {
      message: 'Passwords must match!',
      path: ['confirmPassword'],
    }
  )

export type SignUp = z.infer<typeof registrationSchema>
export const FormSignUp = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<SignUp>({ resolver: zodResolver(registrationSchema) })
  const formId = useId()

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'h1'}>
        Sign Up
      </Typography>
      <form className={s.form} id={formId} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.containerInput}>
          <ControlledInput
            className={s.input}
            control={control}
            label={'Email'}
            name={'email'}
            placeholder={'email'}
            type={InputType.text}
          />
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
          <ControlledInput
            className={s.input}
            control={control}
            iconEnd={<EyeOffOutline />}
            iconEndNotActive={<EyeOutline />}
            label={'Confirm password'}
            name={'confirmPassword'}
            placeholder={'confirm password'}
            type={InputType.password}
          />
        </div>
        <Button className={s.button} form={formId} fullWidth>
          Create New Password
        </Button>
      </form>
      <Typography as={'h2'} variant={'body2'}>
        Already have an account?
      </Typography>
      <Typography as={NavLink} className={s.signIn} to={path.signIn} variant={'link3'}>
        Sign In
      </Typography>
    </Card>
  )
}
