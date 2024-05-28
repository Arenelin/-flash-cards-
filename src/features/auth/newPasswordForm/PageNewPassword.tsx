import { NewPasswordForm } from '@/features/auth'

const onSubmit = () => {}

export const PageNewPassword = () => {
  return <NewPasswordForm onSubmit={onSubmit} />
}

PageNewPassword.displayName = 'PageNewPassword'
