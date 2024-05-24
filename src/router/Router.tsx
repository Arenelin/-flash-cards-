import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { path } from '@/common/enums'
import { MeResponse } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import { DeckById } from '@/features/decks/ui/deckById/DeckById'
import { DecksList } from '@/features/decks/ui/decksList/DecksList'
import { Error } from '@/features/error/Error'
import { PageProfile } from '@/router/ui/pageProfile/pageProfile'
import { PageSignIn } from '@/router/ui/pagesAuth/PageSignIn'
import { PageSignUp } from '@/router/ui/pagesAuth/PageSignUp'
import { PageForgotPassword, PageNewPassword } from '@/router/ui/pagesAuth/PagesAuth'

const publicRoutes: RouteObject[] = [
  {
    element: <Navigate to={path.signIn} />,
    path: path.base,
  },
  {
    element: <PageSignIn />,
    path: path.signIn,
  },
  {
    element: <PageForgotPassword />,
    path: path.forgotPassword,
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
    element: <Error />,
    path: path.error,
  },
  {
    element: <Navigate to={path.error} />,
    path: '/*',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <DecksList />,
    path: path.decks,
  },
  {
    element: <DeckById />,
    path: `${path.decks}/:id`,
  },
  {
    element: <PageProfile />,
    path: path.profile,
  },
]

const PrivateRouter = () => {
  const { data } = useGetMeQuery()

  return (data as MeResponse)?.id ? <Outlet /> : <Navigate to={path.signIn} />
}

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRouter />,
      },
      ...publicRoutes,
    ],
    element: <Outlet />,
    path: path.base,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
