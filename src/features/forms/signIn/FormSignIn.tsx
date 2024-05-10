import { useId, useState } from 'react'
import { useForm } from 'react-hook-form'

import EyeOffOutline from '@/assets/icons/EyeOffOutline'
import EyeOutline from '@/assets/icons/EyeOutline'
import { Button, Card, InputType, Typography } from '@/common/components/ui'
import { ControlledCheckbox } from '@/common/components/ui/controlled/controlled-checkbox/Controlled-checkbox'
import { ControlledInput } from '@/common/components/ui/controlled/controlled-input/Controlled-input'
import { emailSchema, passwordSchema } from '@/common/utils/zodSchema'
import { FormForgotPassword } from '@/features/forms'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './formSignIn.module.scss'

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

  const [isForgotPassword, setIsForgotPassword] = useState(false)
  const forgotPasswordHandler = () => {
    // TODO add forgot password logic
    setIsForgotPassword(true)
  }

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
            as={'button'}
            className={s.forgotPassword}
            onClick={forgotPasswordHandler}
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
      <Typography as={'a'} className={s.signUp} href={'#'} variant={'link3'}>
        Sign Up
      </Typography>
      {isForgotPassword && (
        // TODO give necessary email from form
        <FormForgotPassword email={'example@mail.com'} setIsForgotPassword={setIsForgotPassword} />
      )}
    </Card>
  )
}