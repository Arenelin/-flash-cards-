import { FormForgotPassword, FormSignIn, FormSignUp } from '@/features/auth'
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
  return (
    <Page>
      <FormSignIn onSubmit={onSubmit} />
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
