import { appApi } from '@/app/api/appApi'
import {
  ForgotPasswordArgs,
  MeArgs,
  MeResponse,
  ResetPasswordTokenArgs,
  SignInArgs,
  SignInResponse,
  SignUpArgs,
  SignUpResponse,
} from '@/common/types'

export const authApi = appApi.injectEndpoints({
  endpoints: builder => {
    return {
      authToken: builder.mutation<undefined, void>({
        query: () => ({
          method: 'POST',
          url: 'v2/auth/refresh-token',
        }),
      }),

      forgotPassword: builder.query<undefined, ForgotPasswordArgs>({
        query: body => ({
          body: body,
          method: 'POST',
          url: 'v1/auth/recover-password',
        }),
      }),

      getMe: builder.query<MeResponse, void>({
        providesTags: ['Me'],
        query: () => 'v1/auth/me',
      }),

      logOut: builder.mutation<undefined, void>({
        query: () => ({
          method: 'POST',
          url: 'v1/auth/logout',
        }),
      }),

      resetPasswordToken: builder.mutation<undefined, ResetPasswordTokenArgs>({
        query: ({ token, ...body }) => ({
          method: 'POST',
          params: body,
          url: `v1/auth/reset-password/${token}`,
        }),
      }),

      signIn: builder.mutation<SignInResponse, SignInArgs>({
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

      updateMe: builder.mutation<MeResponse, MeArgs>({
        query: body => ({
          body: body,
          method: 'PATCH',
          url: 'v1/auth/me',
        }),
      }),
    }
  },
})

export const {
  useAuthTokenMutation,
  useForgotPasswordQuery,
  useGetMeQuery,
  useLogOutMutation,
  useResetPasswordTokenMutation,
  useSignInMutation,
  useSignUpMutation,
  useUpdateMeMutation,
} = authApi
