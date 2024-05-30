import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'
import { LoginError } from '@/common/types'
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

  if (signInResult.error) {
    toast.error((signInResult.error as LoginError).data.message ?? 'You are not login')
  }
  if (signInResult.isSuccess) {
    navigate(path.decks)
  }
  if (isSuccess) {
    navigate(path.decks)
  }

  return <FormSignIn onSubmit={onSubmitSignIn} />
}

PageSignIn.displayName = 'PageSignIn'
