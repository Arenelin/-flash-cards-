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
  onSubmit: (data: any) => void
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

  return (
    <Card className={s.card}>
      <Typography as={'h2'} variant={'h1'}>
        Sign In
      </Typography>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={s.containerInput}>
          <ControlledInput
            control={control}
            label={'Email'}
            name={'email'}
            placeholder={'email'}
            type={InputType.text}
          />
          <ControlledInput
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
          <ControlledCheckbox control={control} name={'rememberMe'} />
          <Typography as={'a'} className={s.containerTypography} variant={'body2'}>
            Forgot Password?
          </Typography>
        </div>
        <Button as={'button'} fullWidth>
          Sign In
        </Button>
      </form>
      <Typography as={'h3'} className={s.registration} variant={'body2'}>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Don't have an account?
      </Typography>
      <Typography as={'a'} className={s.signUp} variant={'h4'}>
        Sign Up
      </Typography>
    </Card>
  )
}
