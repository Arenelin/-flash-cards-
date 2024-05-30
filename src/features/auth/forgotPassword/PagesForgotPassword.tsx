import { toast } from 'react-toastify'

import { SignErrorResponse } from '@/common/types'
import { FormForgotPassword } from '@/features/auth'
import { useForgotPasswordMutation } from '@/features/auth/api/authApi'

import { emailTemplateForgotPassword } from './emailTemplateForgotPassword'

export const PageForgotPassword = () => {
  const [forgotPassword] = useForgotPasswordMutation()

  const forgotPasswordHandler = async (email: string) => {
    try {
      await forgotPassword({ email, html: emailTemplateForgotPassword }).unwrap()
    } catch (error: unknown) {
      toast.error((error as SignErrorResponse)?.data?.errorMessages[0] ?? 'Network error')
    }
  }

  return <FormForgotPassword onSubmit={forgotPasswordHandler} />
}

PageForgotPassword.displayName = 'PageForgotPassword'
