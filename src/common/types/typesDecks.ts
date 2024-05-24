import { Card } from '@/common/types'

export type Author = {
  id: string
  name: string
}
//Todo Cover возможно поправить File | null  или string | null

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

export type CreateDecksArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}
export type UpdateDecksArgs = { id: string } & Partial<CreateDecksArgs>
export type DeleteDecksArgs = { id: string }

export type GetDeckCards = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: string
  question?: string
}

export type GetDeckCardsResponse = {
  items: Card[]
  pagination: Pagination
}

export type GetDecksMinMaxCardsResponse = {
  max: number
  min: number
}

export type ErrorMessages = {
  field: string
  message: string
}

export type ErrorData = {
  errorMessages: ErrorMessages[]
}
export type ErrorResponse = {
  data: ErrorData
  status: number
}
