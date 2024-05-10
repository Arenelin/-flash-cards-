import { CheckEmail } from '@/assets/icons'
import { Button, Card, Typography } from '@/common/components/ui'

import s from '@/features/forms/forgotPassword/formForgotPassword.module.scss'

type PropsType = {
  email: string
  setIsForgotPassword: (isForgotPassword: boolean) => void
}

export const FormForgotPassword = ({ email, setIsForgotPassword }: PropsType) => {
  return (
    <Card className={s.card}>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        Check Email
      </Typography>
      <CheckEmail className={s.checkEmail} />
      <Typography className={s.information} variant={'body2'}>
        {`We’ve sent an Email with instructions to ${email}`}
      </Typography>
      <Button fullWidth onClick={() => setIsForgotPassword(false)}>
        Back to Sign In
      </Button>
    </Card>
  )
}
