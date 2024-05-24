import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { appApi } from './api/appApi'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(appApi.middleware),
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
  },
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
