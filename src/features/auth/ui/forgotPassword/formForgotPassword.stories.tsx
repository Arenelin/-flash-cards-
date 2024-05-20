import { ForgotPassword, FormForgotPassword } from '@/features/auth'
import { Meta, StoryObj } from '@storybook/react'
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router'

const meta = {
  component: FormForgotPassword,
  decorators: [withRouter],
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({}),
  },
  tags: ['autodocs'],
  title: 'Auth/ForgotPassword',
} satisfies Meta<typeof FormForgotPassword>

export default meta
type Story = StoryObj<typeof FormForgotPassword>

const onSubmit = (data: ForgotPassword) => {
  alert(`получен email, на который надо послать инструкции по смене пароля:     ${data.email}`)
}

export const FormForgotPasswordDefault = {
  render() {
    return (
      <>
        <p style={{ color: '#bea6ff', margin: '100px auto', textAlign: 'justify', width: '40%' }}>
          &nbsp;&nbsp;&nbsp;Ссылки &nbsp;&nbsp;<b style={{ color: '#704ecc' }}>Try logging in</b>
          &nbsp;&nbsp; и &nbsp;&nbsp; <b style={{ color: '#704ecc' }}>Back to Sing In</b> выдают
          ошибку, т.к. установленный в Storybook аддон для подключения роутера конфликтует с логикой
          внутри компоненты. В приложении компонента корректно переходит по этим ссылкам.
        </p>
        <FormForgotPassword onSubmit={onSubmit} />
      </>
    )
  },
} satisfies Story
