export type Option = {
  label: string
  value: string
}
//Deck
export type Author = {
  id: string
  name: string
}

export type Deck = {
  author: Author
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksResponse = {
  items: Deck[]
  pagination: Pagination
}

export type GetDecks = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type GetDeckById = {
  id: string
}

export type DecksResponse = {
  author: Author
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type GetDeckByIdResponse = {
  author: Author
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}
export type CreateDecksArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}

export type UpdateDecksArgs = { id: string } & Partial<CreateDecksArgs>

export type DeleteDecksArgs = { id: string }

export type ErrorMessages = {
  field: string
  message: string
}

export type Data = {
  errorMessages: ErrorMessages[]
}

export type ErrorResponse = {
  data: Data
  status: number
}

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
  rememberMe: boolean
}

export type SignInResponse = {
  accessToken: string
  refreshToken: string
}

export type SignUpArgs = {
  name: string
  password: string
  sendConfirmationEmail: boolean
} & ForgotPasswordArgs

export type SignUpResponse = MeResponse

export type ForgotPasswordArgs = {
  email: string
  html: string
  subject: string
}

export type ResetPasswordTokenArgs = {
  password: string
  token: string
}
