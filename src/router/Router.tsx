import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { FormForgotPassword, FormSignIn, FormSignUp } from '@/features/auth'
import { Page } from '@/router/ui/page/Page'
const onSubmit = () => {}

export enum path {
  forgotPassword = '/forgot-password',
  signIn = '/signIn',
  signUp = '/signUp',
}

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
