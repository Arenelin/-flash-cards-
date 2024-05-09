import { useId } from 'react'
import { useForm } from 'react-hook-form'

import { EyeOffOutline, EyeOutline } from '@/assets/icons'
import { Button, Card, InputType, Typography } from '@/common/components/ui'
import { ControlledInput } from '@/common/components/ui/controlled/controlled-input/Controlled-input'
import { DevTool } from '@hookform/devtools'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './formSignUp.module.scss'

type Props = {
  onSubmit: (data: SignUp) => void
}
export const passwordValidationRegex = /^(?=.*[A-Z]).+$/
export const email = z
  .string()
  .min(1, { message: 'This field has to be filled.' })
  .email('This is not a valid email.')
export const password = z
  .string()
  .min(5, { message: 'Password must be at least 5 characters' })
  .refine(val => passwordValidationRegex.test(val), {
    message: 'Password must contain one uppercase',
  })

const registrationSchema = z
  .object({
    confirmPassword: password,
    email: email,
    password: password,
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
    <>
      <DevTool control={control} />

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
          <Button as={'button'} className={s.button} form={formId} fullWidth type={'submit'}>
            Sign Up
          </Button>
        </form>
        <Typography as={'h2'} variant={'body2'}>
          Already have an account?
        </Typography>
        <Typography as={'a'} className={s.signIn} variant={'h4'}>
          Sign In
        </Typography>
      </Card>
    </>
  )
}
