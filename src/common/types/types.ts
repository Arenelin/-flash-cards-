export type Option = {
  label: string
  value: string
}

export type Author = {
  id: string
  name: string
}

export type Items = {
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
  items: Items[]
  pagination: Pagination
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPerPage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
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
export type CreateDecksArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}

export type UpdateDecksArgs = { id: string } & Partial<CreateDecksArgs>

export type DeleteDecksArgs = { id: string }
