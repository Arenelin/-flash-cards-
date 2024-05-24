import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import defaultDeckImage from '@/assets/defaultDeckImage.jpeg'
import { ButtonSort, Table, Tbody, Td, Th, Thead, Tools, Tr } from '@/common/components'
import { ContainerImageText } from '@/common/components/tables/ui/containerImgText/ContainerImageText'
import { path } from '@/common/enums'
import { Deck, MeResponse } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'

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
  const { data } = useGetMeQuery()

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
              <Td>
                <ContainerImageText
                  defaultImg={defaultDeckImage}
                  img={deck.cover}
                  link={`${path.decks}/${deck.id}`}
                  text={deck.name}
                />
              </Td>
              <Td>{deck.cardsCount}</Td>
              <Td>{getDateString(deck.updated)}</Td>
              <Td>{deck.author.name}</Td>
              <Td>
                <Tools
                  canUseTool={(data as MeResponse)?.id === deck?.userId}
                  onDelete={() => onDeleteHandler(deck?.id)}
                  onEdit={() => onEditHandler(deck?.id)}
                  onPlay={() => onPlayHandler(deck?.id)}
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
