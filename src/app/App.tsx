import { Provider } from 'react-redux'

import { store } from '@/app/store'
import { Layout } from '@/features/layout/Layout'
import { Router } from '@/router/Router'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  )
}
