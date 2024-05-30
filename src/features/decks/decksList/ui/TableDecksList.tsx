import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import defaultDeckImage from '@/assets/defaultDeckImage.jpeg'
import { Table, TablesHeaderSort, Tbody, Td, Tools, Tr } from '@/common/components'
import { ContainerImageText } from '@/common/components/tables/ui/containerImgText/ContainerImageText'
import { columnsDecks } from '@/common/consts'
import { path } from '@/common/enums'
import { Column, CreateDecksArgs, Deck, Sort } from '@/common/types'

type Props = {
  columnsDecks: Column[]
  currentUserId?: string
  decks?: Deck[]
  onDelete?: (idDeck: string, name: string) => void
  onEdit?: (id: string, args: CreateDecksArgs) => void
  onSort: (sort: Sort) => void
  sort: Sort
}

type TableDecksListProps = Omit<ComponentPropsWithoutRef<'table'>, keyof Props> & Props
export const TableDecksList = forwardRef<ElementRef<'table'>, TableDecksListProps>((props, ref) => {
  const { currentUserId, decks, onDelete, onEdit, onSort, sort, ...rest } = props

  const onDeleteHandler = (id: string, name: string) => {
    if (onDelete) {
      onDelete(id, name)
    }
  }

  const onEditHandler = (id: string, args: CreateDecksArgs) => {
    if (onEdit) {
      onEdit(id, args)
    }
  }
  const getDateString = (date: Date | string, locales: string = 'ru-RU') => {
    return new Date(date).toLocaleDateString(locales)
  }

  return (
    <Table {...rest} ref={ref}>
      <TablesHeaderSort columns={columnsDecks} onSort={onSort} sort={sort} />
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
                  onDelete={(id: string) => onDeleteHandler(id, deck?.name)}
                  onEdit={(deckId: string) =>
                    onEditHandler(deckId, {
                      cover: deck.cover,
                      isPrivate: deck.isPrivate,
                      name: deck.name,
                    })
                  }
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
