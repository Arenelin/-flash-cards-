import { Provider } from 'react-redux'

import { Router } from '@/app/Router'
import { store } from '@/app/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
