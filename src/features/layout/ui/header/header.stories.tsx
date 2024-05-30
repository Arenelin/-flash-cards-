import { useState } from 'react'

import { Header } from '@/features/layout/ui/header/Header'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Header,
  tags: ['autodocs'],
  title: 'Features/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof Header>

export const HeaderLogin = {
  render() {
    const [isAuthorization, setIsAuthorization] = useState(true)

    return (
      <>
        <p style={{ color: '#bea6ff', margin: '100px auto', textAlign: 'justify', width: '40%' }}>
          &nbsp;&nbsp;&nbsp;Ссылки на <b style={{ color: '#704ecc' }}>логотипе</b>,{' '}
          <b style={{ color: '#704ecc' }}>My profile</b> и&nbsp;
          <b style={{ color: '#704ecc' }}>Sign In</b> выдают ошибку, т.к. установленный в Storybook
          аддон для подключения роутера конфликтует с логикой внутри компоненты. В приложении
          компонента корректно переходит по этим ссылкам.
        </p>
        <Header
          avatar={'https://i.pinimg.com/736x/6e/2f/88/6e2f886a234cefdb5b680763dbc53b4b.jpg'}
          email={''}
          isAuth={isAuthorization}
          logOut={() => setIsAuthorization(false)}
          name={'Emilia'}
        />
      </>
    )
  },
} satisfies Story

export const HeaderLogout = {
  render() {
    return (
      <>
        <Header isAuth={false} logOut={() => {}} />
        <p style={{ color: '#bea6ff', margin: '100px auto', textAlign: 'justify', width: '40%' }}>
          &nbsp;&nbsp;&nbsp;Ссылки на <b style={{ color: '#704ecc' }}>логотипе</b> и&nbsp;
          <b style={{ color: '#704ecc' }}>Sign In</b> выдают ошибку, т.к. установленный в Storybook
          аддон для подключения роутера конфликтует с логикой внутри компоненты. В приложении
          компонента корректно переходит по этим ссылкам.
        </p>
      </>
    )
  },
} satisfies Story
