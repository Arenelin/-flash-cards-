import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'
import { SignErrorResponse } from '@/common/types'
import { FormSignIn, SignIn } from '@/features/auth'
import { useGetMeQuery, useSignInMutation } from '@/features/auth/api/authApi'

export const PageSignIn = () => {
  const [signIn, signInResult] = useSignInMutation()
  const { isLoading, isSuccess } = useGetMeQuery()
  const navigate = useNavigate()
  const onSubmitSignIn = (formData: SignIn) => {
    signIn(formData).unwrap()
  }

  if (signInResult.isLoading || isLoading) {
    return <Preloader />
  }

  if (isSuccess) {
    navigate(path.decks)
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

  return <FormSignIn onSubmit={onSubmitSignIn} />
}

PageSignIn.displayName = 'PageSignIn'
