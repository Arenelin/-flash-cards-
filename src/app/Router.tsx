import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <div>hello</div>,
    path: '/',
  },
])

export function Router() {
  return <RouterProvider router={router} />
}
