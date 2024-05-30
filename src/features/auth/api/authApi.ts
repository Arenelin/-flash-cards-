import { toast } from 'react-toastify'

import { appApi } from '@/app/api/appApi'
import {
  ForgotPasswordArgs,
  MeResponse,
  ResetPasswordArgs,
  SignInArgs,
  SignInResponse,
  SignUpArgs,
  SignUpResponse,
} from '@/common/types'
import { ProfileFormData } from '@/features/auth/profile/ui/PersonalInformation'

export const authApi = appApi.injectEndpoints({
  endpoints: builder => {
    return {
      authToken: builder.mutation<undefined, void>({
        query: () => ({
          method: 'POST',
          url: 'v2/auth/refresh-token',
        }),
      }),

      forgotPassword: builder.mutation<undefined, ForgotPasswordArgs>({
        query: body => ({
          body,
          method: 'POST',
          url: 'v1/auth/recover-password',
        }),
      }),

      getMe: builder.query<MeResponse, void>({
        providesTags: ['Me'],
        query: () => 'v1/auth/me',
      }),

      logOut: builder.mutation<undefined, void>({
        invalidatesTags: ['Me'],
        async onQueryStarted() {
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')
          toast.success('You are logout successfully.', { autoClose: 1000 })
        },
        query: () => ({
          method: 'POST',
          url: 'v1/auth/logout',
        }),
      }),

      resetPassword: builder.mutation<undefined, ResetPasswordArgs>({
        query: ({ password, token }) => ({
          body: { password },
          method: 'POST',
          url: `v1/auth/reset-password/${token}`,
        }),
      }),

      signIn: builder.mutation<SignInResponse, SignInArgs>({
        invalidatesTags: ['Me'],
        async onQueryStarted(_, { queryFulfilled }) {
          const { data } = await queryFulfilled

          if (!data) {
            return
          }

          localStorage.setItem('accessToken', data.accessToken)
          localStorage.setItem('refreshToken', data.refreshToken)
          toast.success('You are login successfully.', { autoClose: 1000 })
        },
        query: body => ({
          body: body,
          method: 'POST',
          url: 'v1/auth/login',
        }),
      }),

      signUp: builder.mutation<SignUpResponse, SignUpArgs>({
        query: body => ({
          body: body,
          method: 'POST',
          url: 'v1/auth/sign-up',
        }),
      }),

      updateMe: builder.mutation<MeResponse, ProfileFormData>({
        invalidatesTags: ['Me'],
        query: ({ avatar, name }) => {
          const formData = new FormData()

          if (name) {
            formData.append('name', name)
          }
          if (avatar) {
            formData.append('avatar', avatar)
          } else if (avatar === null) {
            formData.append('avatar', '')
          }

          return {
            body: formData,
            method: 'PATCH',
            url: 'v1/auth/me',
          }
        },
      }),
    }
  },
})

export const {
  useAuthTokenMutation,
  useForgotPasswordMutation,
  useGetMeQuery,
  useLogOutMutation,
  useResetPasswordMutation,
  useSignInMutation,
  useSignUpMutation,
  useUpdateMeMutation,
} = authApi
