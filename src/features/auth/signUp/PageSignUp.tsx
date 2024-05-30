import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'
import { SignErrorResponse, SignUpArgs } from '@/common/types'
import { FormSignUp, SignUp } from '@/features/auth'
import { useSignUpMutation } from '@/features/auth/api/authApi'

import { emailTemplateConfirmEmail } from './emailTemplateConfirmEmail'

export const PageSignUp = () => {
  const [signUp, signUpResult] = useSignUpMutation()
  const navigate = useNavigate()

  const onSubmit = (data: SignUp) => {
    const registrationData: SignUpArgs = {
      email: data.email,
      html: emailTemplateConfirmEmail,
      name: data.name,
      password: data.password,
      sendConfirmationEmail: true,
    }

    signUp(registrationData)
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

  return <FormSignUp onSubmit={onSubmit} />
}

PageSignUp.displayName = 'PageSignUp'
