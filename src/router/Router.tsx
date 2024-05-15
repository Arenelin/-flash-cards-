import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { path } from '@/common/enums'
import { FormForgotPassword, FormSignIn, FormSignUp } from '@/features/auth'
import { Decks } from '@/features/desks/Decks'
import { Page } from '@/router/ui/page/Page'
const onSubmit = () => {}

const publicRoutes: RouteObject[] = [
  {
    element: (
      <Page>
        <FormForgotPassword onSubmit={onSubmit} />
      </Page>
    ),
    path: path.forgotPassword,
  },
  {
    element: (
      <Page>
        <FormSignIn onSubmit={onSubmit} />
      </Page>
    ),
    path: path.signIn,
  },
  {
    element: (
      <Page>
        <FormSignUp onSubmit={onSubmit} />
      </Page>
    ),
    path: path.signUp,
  },
  {
    element: (
      <Page>
        <Decks />
      </Page>
    ),
    path: path.decks,
  },
  {
    element: (
      <Page style={{ backgroundColor: 'red' }}>
        <div>Error</div>
      </Page>
    ),
    path: '*',
  },
]

const privateRoutes = [{ element: <div>desks</div>, path: '/' }]
const PrivateRouter = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={path.signIn} />
}

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRouter />,
  },
  ...publicRoutes,
])

export function Router() {
  return <RouterProvider router={router} />
}
