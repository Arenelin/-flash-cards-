import { FormForgotPassword } from '@/features/auth'
import { Page } from '@/router/ui/page/Page'

const onSubmit = () => {}

export const PageForgotPassword = () => {
  return (
    <Page>
      <FormForgotPassword onSubmit={onSubmit} />
    </Page>
  )
}
