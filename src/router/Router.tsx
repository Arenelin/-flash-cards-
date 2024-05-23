import { useState } from 'react'
import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Button } from '@/common/components'
import { path } from '@/common/enums'
import { PageDeckById } from '@/router/ui/pageDeckById/PageDeckById'
import { PageDecksList } from '@/router/ui/pageDecksList/pageDecksList'
import { PageError } from '@/router/ui/pageError/pageError'
import { PageSignUp } from '@/router/ui/pagesAuth/PageSignUp'
import { PageForgotPassword, PageNewPassword, PageSignIn } from '@/router/ui/pagesAuth/PagesAuth'

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
    element: <Navigate to={path.signIn} />,
    path: '/',
  },
  {
    element: <PageError />,
    path: '/*',
  },
]

const privateRoutes = [
  {
    element: <PageDecksList />,
    path: path.decks,
  },
  {
    element: <PageDeckById />,
    path: `${path.decks}/:id`,
  },
]

const PrivateRouter = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    <>
      <Button
        onClick={() => setIsAuthenticated(false)}
        style={{ position: 'fixed', right: '300px', top: '12px', zIndex: '10' }}
        variant={'primary'}
      >
        Hide Private Pages
      </Button>
      {isAuthenticated ? <Outlet /> : <Navigate to={path.signIn} />}
    </>
  )
}

const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRouter />,
  },
  ...publicRoutes,
])

export function Router() {
  return <RouterProvider router={router}></RouterProvider>
}
