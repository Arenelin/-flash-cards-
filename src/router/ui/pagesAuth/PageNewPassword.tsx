import { NewPasswordForm } from '@/features/auth'
import { Page } from '@/router/ui/page/Page'

const onSubmit = () => {}

export const PageNewPassword = () => {
  return (
    <Page>
      <NewPasswordForm onSubmit={onSubmit} />
    </Page>
  )
}
