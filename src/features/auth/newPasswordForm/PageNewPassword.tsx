import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import { path } from '@/common/enums'
import { NewPasswordError } from '@/common/types'
import { NewPassword, NewPasswordForm } from '@/features/auth'
import { useResetPasswordMutation } from '@/features/auth/api/authApi'

export const PageNewPassword = () => {
  const [resetPassword] = useResetPasswordMutation()
  const params = useParams()
  const navigate = useNavigate()
  const onSubmit = async (data: NewPassword) => {
    try {
      await resetPassword({ password: data.password, token: params.token || '' }).unwrap()
      toast.success('Password reset successfully')
      navigate(path.signIn)
    } catch (e) {
      const err = e as NewPasswordError

      toast.error(
        (err.status === 404 && err.data?.message) ||
          (err.status === 'FETCH_ERROR' && err.error) ||
          'Some Error'
      )
    }
  }

  return <NewPasswordForm onSubmit={onSubmit} />
}

PageNewPassword.displayName = 'PageNewPassword'
