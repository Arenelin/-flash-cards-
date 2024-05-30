import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { path } from '@/common/enums'
import { useGetMeQuery } from '@/features/auth/api/authApi'
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

export const publicRoutes: RouteObject[] = [
  {
    element: <Navigate to={path.signIn} />,
    path: path.base,
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
    element: <PageForgotPassword />,
    path: path.forgotPassword,
  },
  {
    element: <PageNewPassword />,
    path: `${path.newPassword}/:token`,
  },
  // {
  //   element: ,
  //   path: '*',
  // },
]

export const privateRoutes: RouteObject[] = [
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
  const { isSuccess } = useGetMeQuery()

  return isSuccess ? <Outlet /> : <Navigate to={path.signIn} />
}

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRouter />,
      },
      // ...privateRoutes,
      ...publicRoutes,
    ],
    element: <Layout />,
    errorElement: <Error />,
    path: path.base,
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
