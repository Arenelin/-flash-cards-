import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'

import { CheckEmail } from '@/assets/icons'
import { Button, Card, InputType, Typography } from '@/common/components'
import { ControlledInput } from '@/common/components/controlled'
import { path } from '@/common/enums'
import { emailSchema } from '@/common/utils/zodSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames'
import { z } from 'zod'

import s from './formForgotPassword.module.scss'

type Props = {
  className?: string
  onSubmit: (email: string) => void
}

const schema = z.object({ email: emailSchema })

export type ForgotPassword = z.infer<typeof schema>
export const FormForgotPassword = ({ className, onSubmit }: Props) => {
  const { control, handleSubmit } = useForm<ForgotPassword>({ resolver: zodResolver(schema) })
  const [stepOne, setStepOne] = useState(true)
  const [email, setEmail] = useState('')

  const stepOneHandler = (data: ForgotPassword) => {
    onSubmit(data.email)
    setEmail(data.email)
    setStepOne(false)
  }

  return (
    <Card className={classNames(s.block, className)}>
      {stepOne ? (
        <form className={s.stepOne} onSubmit={handleSubmit(stepOneHandler)}>
          <Typography as={'h1'} className={s.title} variant={'h1'}>
            Forgot your password?
          </Typography>
          <ControlledInput
            autoFocus
            className={s.input}
            control={control}
            label={'Email'}
            name={'email'}
            placeholder={'email'}
            type={InputType.text}
          />
          <Typography className={s.text1} variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button fullWidth>Send Instructions</Button>
          <Typography className={s.text2} variant={'body2'}>
            Did you remember your password?
          </Typography>
          <Typography as={NavLink} className={s.try} to={path.signIn} variant={'link3'}>
            Try logging in
          </Typography>
        </form>
      ) : (
        <div className={s.stepTwo}>
          <Typography as={'h1'} className={s.title} variant={'h1'}>
            Check Email
          </Typography>
          <CheckEmail className={s.checkEmail} />
          <Typography className={s.text3} variant={'body2'}>
            {`We’ve sent an Email with instructions to ${email}`}
          </Typography>
          <Button as={NavLink} fullWidth to={path.signIn}>
            Back to Sign In
          </Button>
        </div>
      )}
    </Card>
  )
}

FormForgotPassword.displayName = 'FormForgotPassword'
