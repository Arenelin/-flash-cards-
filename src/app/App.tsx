import { Provider } from 'react-redux'

import { Layout } from '@/features/layout/Layout'
import { Router } from '@/router/Router'

import { store } from './store'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  )
}
