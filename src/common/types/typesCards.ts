export type CardItem = {
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

type ErrorData = {
  message: string
  path: string
  statusCode: number
  timestamp: string
}

export type ErrorResponseCard = {
  data: ErrorData
  status: number
}

export type GetCardsById = { id: string }
