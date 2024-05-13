// @ts-ignore
import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Page } from '@/common/components/ui/page/Page'

import { FormForgotPassword } from '../features/forms/forgotPassword/FormForgotPassword'
import { FormSignIn } from '../features/forms/signIn/FormSignIn'
import { FormSignUp } from '../features/forms/signUp/FormSignUp'

const onSubmit = () => console.log('rout')

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
]

const privateRoutes = [{ element: <div>desks</div>, path: '/desks' }]
const PrivateRouter = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to={'/signIn'} />
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
