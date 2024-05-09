import { useId } from 'react'
import { useForm } from 'react-hook-form'

import EyeOffOutline from '@/assets/icons/EyeOffOutline'
import EyeOutline from '@/assets/icons/EyeOutline'
import { Button, Card, InputType, Typography } from '@/common/components/ui'
import { ControlledCheckbox } from '@/common/components/ui/controlled/controlled-checkbox/Controlled-checkbox'
import { ControlledInput } from '@/common/components/ui/controlled/controlled-input/Controlled-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './formSignIn.module.scss'

type Props = {
  onSubmit: (data: SignIn) => void
}
const passwordValidationRegex = /^(?=.*[A-Z]).+$/
const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field has to be filled.' })
    .email('This is not a valid email.'),
  password: z
    .string()
    .min(5, { message: 'Password must be at least 5 characters' })
    .refine(val => passwordValidationRegex.test(val), {
      message: 'Password must contain one uppercase',
    }),
  rememberMe: z.boolean().optional(),
})

export type SignIn = z.infer<typeof loginSchema>
export const FormSignIn = ({ onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<SignIn>({ resolver: zodResolver(loginSchema) })
  const formId = useId()

  return (
    <Card className={s.card}>
      <Typography as={'h2'} variant={'h1'}>
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
          <Typography as={'a'} className={s.forgotPassword} variant={'body2'}>
            Forgot Password?
          </Typography>
        </div>
        <Button as={'button'} form={formId} fullWidth type={'submit'}>
          Sign In
        </Button>
      </form>
      <Typography as={'h3'} className={s.registration} variant={'body2'}>
        Don&apos;t have an account?
      </Typography>
      <Typography as={'a'} className={s.signUp} variant={'h4'}>
        Sign Up
      </Typography>
    </Card>
  )
}
