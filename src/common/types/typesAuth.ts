// Auth
export type MeResponse = {
  avatar: string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}
export type MeArgs = {
  avatar: string
  name: string
}
export type SignInArgs = {
  email: string
  password: string
  rememberMe?: boolean
}
export type SignInResponse = {
  accessToken: string
  refreshToken: string
}
export type SignUpArgs = {
  name?: string
  password: string
  sendConfirmationEmail?: boolean
} & ForgotPasswordArgs

export type SignUpResponse = MeResponse

export type ForgotPasswordArgs = {
  email: string
  html?: string
  subject?: string
}
export type ResetPasswordArgs = {
  password: string
  token: string
}
export type MeError = {
  message: string
  path: string
  statusCode: number
  timestamp: string
}

export type DataSignUp = {
  errorMessages: Array<string>
}
export type SignErrorResponse = {
  data: DataSignUp
  status: number
}

export type LoginError = {
  data: MeError
  status: number
}
export type NewPasswordError = {
  data?: {
    message: string
    statusCode: number
  }
  error?: string
  status: number | string
}
