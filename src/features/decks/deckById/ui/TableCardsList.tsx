import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ButtonSort, Grade, Table, Tbody, Td, Th, Thead, Tools, Tr } from '@/common/components'
import { ContainerImageText } from '@/common/components/tables/ui/containerImgText/ContainerImageText'
import { CardItem, GradeScale } from '@/common/types'

type Props = {
  cards?: CardItem[]
  isMy: boolean
  onDelete?: (idCard: string, question: string) => void
  onEdit?: (idCard: string) => void
  onSort: (sort: 'asc' | 'desc', text: string) => void
  sort: 'asc' | 'desc'
}

type TableDecksListProps = ComponentPropsWithoutRef<'table'> & Props
export const TableCardsList = forwardRef<ElementRef<'table'>, TableDecksListProps>((props, ref) => {
  const { cards, isMy, onDelete, onEdit, onSort, sort, ...rest } = props

  const onDeleteHandler = (id: string, question: string) => {
    if (onDelete) {
      onDelete(id, question)
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
            <ButtonSort onSort={onSort} sort={sort} text={'Last Updated'} />
          </Th>
          <Th>Grade</Th>
          {isMy && <Th></Th>}
        </Tr>
      </Thead>
      <Tbody>
        {cards?.map(card => {
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
                    id={card.id}
                    onDelete={id => onDeleteHandler(id, card.question)}
                    onEdit={onEditHandler}
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
