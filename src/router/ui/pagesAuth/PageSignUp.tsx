import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'
import { SignErrorResponse, SignUpArgs } from '@/common/types'
import { FormSignUp, SignUp } from '@/features/auth'
import { useSignUpMutation } from '@/features/auth/api/authApi'
import { Page } from '@/router/ui/page/Page'

export const PageSignUp = () => {
  const [signUp, signUpResult] = useSignUpMutation()
  const navigate = useNavigate()

  const html =
    '<b>Hello, ##name##!</b>' +
    '<br/>Please confirm your email by clicking on the link below:<br/>' +
    "<a href='http://localhost:3000/confirm-email/##token##'>Confirm email</a>. " +
    "If it doesn't work, copy and paste the following link in your browser:" +
    '<br/>http://localhost:3000/confirm-email/##token##'

  const onSubmit = (data: SignUp) => {
    const registrationData: SignUpArgs = {
      email: data.email,
      html: html,
      name: data.name,
      password: data.password,
      sendConfirmationEmail: true,
    }

    signUp(registrationData).unwrap()
  }

  if (signUpResult.isLoading) {
    return <Preloader />
  }

  if (signUpResult.error) {
    const error = signUpResult.error as SignErrorResponse
    const Error = error.data.errorMessages.reduce((acc, error) => {
      return acc + String(error)
    }, '')

    toast.error(Error ?? 'Registration failed')
  }

  if (signUpResult.isSuccess) {
    toast.success('Registration completed successfully.\nCheck your email')
    navigate(path.signIn)
  }

  return (
    <Page>
      <FormSignUp onSubmit={onSubmit} />
    </Page>
  )
}
