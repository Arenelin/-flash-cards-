import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Grade, HeaderSort, Table, Tbody, Td, Tools, Tr } from '@/common/components'
import { ContainerImageText } from '@/common/components/tables/ui/containerImgText/ContainerImageText'
import { Card, CardById, Column, GradeScale, Sort } from '@/common/types'

type Props = {
  cards?: Card[]
  columnsCards: Column[]
  isMy: boolean
  onDelete?: (idCard: string, question: string) => void
  onEdit?: (args: CardById) => void
  onSort: (sort: Sort) => void
  sort: Sort
}

type TableDecksListProps = ComponentPropsWithoutRef<'table'> & Props
export const TableCardsList = forwardRef<ElementRef<'table'>, TableDecksListProps>((props, ref) => {
  const { cards, columnsCards, isMy, onDelete, onEdit, onSort, sort, ...rest } = props
  const columns = columnsCards.filter(column => (isMy ? column : column.key !== 'tools'))
  const onDeleteHandler = (id: string, question: string) => {
    if (onDelete) {
      onDelete(id, question)
    }
  }
  const onEditHandler = (args: CardById) => {
    if (onEdit) {
      onEdit(args)
    }
  }
  const getDateString = (date: Date | string, locales: string = 'ru-RU') => {
    return new Date(date).toLocaleDateString(locales)
  }

  return (
    <Table {...rest} ref={ref}>
      <HeaderSort columns={columns} onSort={onSort} sort={sort} />
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
                    onEdit={(idCard: string) =>
                      onEditHandler({
                        answer: card.answer,
                        answerImg: card.answerImg,
                        id: idCard,
                        question: card.question,
                        questionImg: card.questionImg,
                      })
                    }
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
