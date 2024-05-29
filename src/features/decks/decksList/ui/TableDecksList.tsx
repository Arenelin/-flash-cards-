import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import defaultDeckImage from '@/assets/defaultDeckImage.jpeg'
import { HeaderSort, Table, Tbody, Td, Tools, Tr } from '@/common/components'
import { ContainerImageText } from '@/common/components/tables/ui/containerImgText/ContainerImageText'
import { columnsDecks } from '@/common/consts'
import { path } from '@/common/enums'
import { Column, Deck, Sort } from '@/common/types'

type Props = {
  columnsDecks: Column[]
  currentUserId?: string
  decks?: Deck[]
  onDelete?: (idDeck: string) => void
  onEdit?: (idDeck: string) => void
  onSort: (sort: Sort) => void
  sort: Sort
}

type TableDecksListProps = Omit<ComponentPropsWithoutRef<'table'>, keyof Props> & Props
export const TableDecksList = forwardRef<ElementRef<'table'>, TableDecksListProps>((props, ref) => {
  const { currentUserId, decks, onDelete, onEdit, onSort, sort, ...rest } = props

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
      <HeaderSort columns={columnsDecks} onSort={onSort} sort={sort} />
      <Tbody>
        {decks?.map((deck: Deck) => {
          return (
            <Tr key={deck?.id}>
              <Td>
                <ContainerImageText
                  defaultImg={defaultDeckImage}
                  img={deck?.cover}
                  link={`${path.decks}/${deck?.id}`}
                  text={deck?.name}
                />
              </Td>
              <Td>{deck?.cardsCount}</Td>
              <Td>{getDateString(deck?.updated)}</Td>
              <Td>{deck?.author?.name}</Td>
              <Td>
                <Tools
                  canUseTool={currentUserId === deck?.userId}
                  id={deck?.id}
                  onDelete={onDeleteHandler}
                  onEdit={onEditHandler}
                />
              </Td>
            </Tr>
          )
        })}
      </Tbody>
    </Table>
  )
})

TableDecksList.displayName = 'TableDecksList'
