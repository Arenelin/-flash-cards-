import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ButtonSort, Grade, Table, Tbody, Td, Th, Thead, Tools, Tr } from '@/common/components'
import { ContainerImageText } from '@/common/components/tables/ui/containerImgText/ContainerImageText'
import { Card, GradeScale } from '@/common/types'

type Props = {
  cards: Card[]
  isMy: boolean
  onDelete?: (idCard: string) => void
  onEdit?: (idCard: string) => void
  onSortLastUpdated: () => void
}

type TableDecksListProps = ComponentPropsWithoutRef<'table'> & Props
export const TableCardsList = forwardRef<ElementRef<'table'>, TableDecksListProps>((props, ref) => {
  const { cards, isMy, onDelete, onEdit, onSortLastUpdated, ...rest } = props

  const onDeleteHandler = (id: string) => {
    if (onDelete) {
      onDelete(id)
    }
  }
  const onEditHandler = (id: string) => {
    if (onEdit) {
      onEdit(id)
    }
  }
  const getDateString = (date: Date | string, locales: string = 'ru-RU') => {
    return new Date(date).toLocaleDateString(locales)
  }

  return (
    <Table {...rest} ref={ref}>
      <Thead>
        <Tr>
          <Th>Question</Th>
          <Th>Answer</Th>
          <Th>
            <ButtonSort text={'Last Updated'} />
          </Th>
          <Th>Grade</Th>
          {isMy && <Th></Th>}
        </Tr>
      </Thead>
      <Tbody>
        {cards.map(card => {
          return (
            <Tr key={card.id}>
              <Td>
                <ContainerImageText img={card.questionImg} text={card.question} />
              </Td>
              <Td>
                <ContainerImageText img={card.answerImg} text={card.answer} />
              </Td>
              <Td>{getDateString(card.updated)}</Td>
              <Td>
                <Grade currentGrade={card.grade as GradeScale} />
              </Td>
              {isMy && (
                <Td>
                  <Tools
                    canUsePlay={false}
                    onDelete={() => onDeleteHandler(card.id)}
                    onEdit={() => onEditHandler(card.id)}
                  />
                </Td>
              )}
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
})

TableCardsList.displayName = 'TableCardsList'
