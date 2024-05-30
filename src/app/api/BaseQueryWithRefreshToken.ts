import { SignInResponse } from '@/common/types'
import { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'

const mutex = new Mutex()

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.flashcards.andrii.es',
  prepareHeaders: headers => {
    const token = localStorage.getItem('accessToken')

    if (headers.get('Authorization')) {
      return headers
    }

    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
  },
})

export const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs | string,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshToken = localStorage.getItem('refreshToken')
        const refreshResult = await baseQuery(
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
            method: 'POST',
            url: '/v2/auth/refresh-token',
          },
          api,
          extraOptions
        )

        if (refreshResult.data) {
          localStorage.setItem('accessToken', (refreshResult.data as SignInResponse).accessToken)
          localStorage.setItem('refreshToken', (refreshResult.data as SignInResponse).refreshToken)
          result = await baseQuery(args, api, extraOptions)
        } else {
          //   const isPublicRoutes = publicRoutes.find(_ => location.pathname.includes('new-password'))
          //
          //   if (isPublicRoutes) {
          //     return
          //   }
          //   router.navigate(path.signIn)
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}
