import { useId } from 'react'
import { useForm } from 'react-hook-form'
import { Link, NavLink } from 'react-router-dom'

import EyeOffOutline from '@/assets/icons/EyeOffOutline'
import EyeOutline from '@/assets/icons/EyeOutline'
import { Button, Card, InputType, Typography } from '@/common/components/ui'
import { ControlledCheckbox, ControlledInput } from '@/common/components/ui/controlled'
import { emailSchema, passwordSchema } from '@/common/utils/zodSchema'
import { path } from '@/router/Router'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/features/auth/ui/signIn/formSignIn.module.scss'

type Props = {
  onSubmit: (data: SignIn) => void
}

const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  rememberMe: z.boolean().optional(),
})

export type SignIn = z.infer<typeof loginSchema>
export const FormSignIn = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<SignIn>({ resolver: zodResolver(loginSchema) })
  const formId = useId()

  return (
    <Card className={s.card}>
      <Typography as={'h1'} variant={'h1'}>
        Sign In
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
        </div>
        <div className={s.containerCheckbox}>
          <ControlledCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
          <Typography
            as={NavLink}
            className={s.forgotPassword}
            to={path.forgotPassword}
            variant={'link1'}
          >
            Forgot Password?
          </Typography>
        </div>
        <Button form={formId} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography as={'h2'} className={s.registration} variant={'body2'}>
        Don&apos;t have an account?
      </Typography>
      <Typography as={Link} className={s.signUp} to={path.signUp} variant={'link3'}>
        Sign Up
      </Typography>
    </Card>
  )
}
