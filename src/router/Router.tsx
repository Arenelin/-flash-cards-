import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { path } from '@/common/enums'
import { Decks } from '@/features/desks/Decks'
import { Page } from '@/router/ui/page/Page'
import { PageError } from '@/router/ui/pageError/pageError'
import {
  PageForgotPassword,
  PageNewPassword,
  PageSignIn,
  PageSignUp,
} from '@/router/ui/pagesAuth/PagesAuth'

const publicRoutes: RouteObject[] = [
  {
    element: <PageForgotPassword />,
    path: path.forgotPassword,
  },
  {
    element: <PageSignIn />,
    path: path.signIn,
  },
  {
    element: <PageSignUp />,
    path: path.signUp,
  },
  {
    element: <PageNewPassword />,
    path: path.newPassword,
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
    element: <PageError />,
    path: '/*',
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
