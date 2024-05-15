import { appApi } from '@/app/api/appApi'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(appApi.middleware),
  reducer: {
    [appApi.reducerPath]: appApi.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
