import { Provider } from 'react-redux'

import { Router } from '@/app/Router'
import { store } from '@/app/store'
import { Layout } from '@/common/components/ui/layout/Layout'

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  )
}
