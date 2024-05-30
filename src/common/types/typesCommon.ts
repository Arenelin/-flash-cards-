import { Card } from '@/common/types/typesCards'

export type Option = {
  label: string
  value: string
}
export type Column = {
  key: string
  sortable: boolean
  title: string
}

export type Sort = {
  direction: 'asc' | 'desc'
  key: string
} | null

export type CardById = Pick<Card, 'answer' | 'answerImg' | 'id' | 'question' | 'questionImg'>

export type GradeScale = 0 | 1 | 2 | 3 | 4 | 5
