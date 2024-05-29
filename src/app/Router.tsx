import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
  useOutletContext,
} from 'react-router-dom'

import { path } from '@/common/enums'
import { PageForgotPassword } from '@/features/auth/forgotPassword/PagesForgotPassword'
import { PageNewPassword } from '@/features/auth/newPasswordForm/PageNewPassword'
import { Profile } from '@/features/auth/profile/Profile'
import { PageSignIn } from '@/features/auth/signIn/PageSignIn'
import { PageSignUp } from '@/features/auth/signUp/PageSignUp'
import { LearnCardsPage } from '@/features/cards/LearnCardsPage'
import { DeckById } from '@/features/decks/deckById/DeckById'
import { DecksList } from '@/features/decks/decksList/DecksList'
import { Error } from '@/features/error/Error'
import { Layout } from '@/features/layout/Layout'

const publicRoutes: RouteObject[] = [
  {
    element: <PageNewPassword />,
    path: `${path.newPassword}/:token`,
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
    element: <Error />,
    path: '*',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={path.decks} />,
    path: path.base,
  },
  {
    element: <DecksList />,
    path: path.decks,
  },
  {
    element: <DeckById />,
    path: `${path.decks}/:id`,
  },
  {
    element: <LearnCardsPage />,
    path: `${path.decks}/:id/learn`,
  },
  {
    element: <Profile />,
    path: path.profile,
  },
]

const PrivateRouter = () => {
  debugger
  const { isAuth } = useOutletContext<{ isAuth: boolean }>()

  return isAuth ? <Outlet /> : <Navigate to={path.base} />
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
    element: <Layout />,
    path: path.base,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
