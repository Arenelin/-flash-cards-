import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ButtonSort, Table, Tbody, Td, Th, Thead, Tools, Tr } from '@/common/components/ui'
import { Deck } from '@/common/types'

type Props = {
  decks: Deck[]
  onDelete?: (idDeck: string) => void
  onEdit?: (idDeck: string) => void
  onPlay?: (idDeck: string) => void
  onSortLastUpdated: () => void
}

type TableDecksListProps = Omit<ComponentPropsWithoutRef<'table'>, keyof Props> & Props
export const TableDecksList = forwardRef<ElementRef<'table'>, TableDecksListProps>((props, ref) => {
  const { decks, onDelete, onEdit, onPlay, onSortLastUpdated, ...rest } = props

  const onDeleteHandler = (id: string) => {
    if (onDelete) {
      onDelete(id)
    }
  }
  const onPlayHandler = (id: string) => {
    if (onPlay) {
      onPlay(id)
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
          <Th>Name</Th>
          <Th>Cards</Th>
          <Th>
            <ButtonSort onClick={onSortLastUpdated} text={'Last Updated'} />
          </Th>
          <Th>Created by</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {decks.map((deck: Deck) => {
          return (
            <Tr key={deck.id}>
              <Td>{deck.name}</Td>
              <Td>{deck.cardsCount}</Td>
              <Td>{getDateString(deck.updated)}</Td>
              <Td>{deck.author.name}</Td>
              <Td>
                <Tools
                  canUseTool={deck.author.id === deck.userId}
                  onDelete={() => onDeleteHandler(deck.id)}
                  onEdit={() => onEditHandler(deck.id)}
                  onPlay={() => onPlayHandler(deck.id)}
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
