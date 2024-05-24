import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'
import { SignErrorResponse } from '@/common/types'
import { FormSignIn, SignIn } from '@/features/auth'
import { useSignInMutation } from '@/features/auth/api/authApi'
import { Page } from '@/router/ui/page/Page'

export const PageSignIn = () => {
  const [signIn, signInResult] = useSignInMutation()
  const navigate = useNavigate()
  const onSubmitSignIn = (formData: SignIn) => {
    signIn(formData).unwrap()
  }

  if (signInResult.isLoading) {
    return <Preloader />
  }
  if (signInResult.error) {
    const error = signInResult.error as SignErrorResponse
    const Error = error.data?.errorMessages.reduce((acc, error) => {
      return acc + String(error)
    }, '')

    toast.error(Error ?? 'You are not login')
  }
  if (signInResult.isSuccess) {
    navigate(path.decks)
  }

  return (
    <Page>
      <FormSignIn onSubmit={onSubmitSignIn} />
    </Page>
  )
}
