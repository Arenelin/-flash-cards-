import { Deck } from '@/common/types/typesDecks'

export type Card = {
  answer: string
  answerImg: null | string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: null | string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}

export type CardById = Pick<Card, 'answer' | 'answerImg' | 'id' | 'question' | 'questionImg'>

export type CardId = { id: string }

export type CardUpdateCreateResponse = Omit<Card, 'grade'>

export type CardUpdateBody = {
  answerImg?: File | null | string
  questionImg?: File | null | string
} & Partial<Pick<Card, 'answer' | 'answerVideo' | 'question' | 'questionVideo'>>

export type CardUpdateArgs = CardId & CardUpdateBody

export type CardBodyCreate = Omit<CardUpdateBody, 'answer' | 'question'> &
  Required<Pick<CardUpdateBody, 'answer' | 'question'>>

export type CardCreateArgs = CardBodyCreate & Pick<Deck, 'id'>

export type NextCard = {
  cardId: string
  deckId: string
  grade: number
}

export type ErrorsField = {
  message: string
  path: string
  statusCode: number
  timestamp: string
}

export type ErrorResponseField = {
  data: ErrorsField
  status: number
}
