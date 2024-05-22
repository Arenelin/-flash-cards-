import { useNavigate } from 'react-router-dom'

import {
  FormForgotPassword,
  FormSignIn,
  FormSignUp,
  NewPasswordForm,
  SignIn,
} from '@/features/auth'
import { useSignInMutation } from '@/features/auth/api/authApi'
import { Page } from '@/router/ui/page/Page'

const onSubmit = () => {}

export const PageForgotPassword = () => {
  return (
    <Page>
      <FormForgotPassword onSubmit={onSubmit} />
    </Page>
  )
}

export const PageSignIn = () => {
  const [signIn] = useSignInMutation()
  const navigate = useNavigate()

  const onSubmitSignIn = async (formData: SignIn) => {
    try {
      await signIn(formData).unwrap()
      navigate('/')
    } catch (error: unknown) {
      navigate('/error')
    }
  }

  return (
    <Page>
      <FormSignIn onSubmit={onSubmitSignIn} />
    </Page>
  )
}

export const PageSignUp = () => {
  return (
    <Page>
      <FormSignUp onSubmit={onSubmit} />
    </Page>
  )
}

export const PageNewPassword = () => {
  return (
    <Page>
      <NewPasswordForm onSubmit={onSubmit} />
    </Page>
  )
}
