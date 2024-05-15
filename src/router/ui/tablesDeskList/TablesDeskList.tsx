import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { ButtonSort, TableComponents, Tools } from '@/common/components/ui'
import { Deck } from '@/common/types'

type Props = {
  desks: Deck[]
  onDelete?: (idDesk: string) => void
  onEdit?: (idDesk: string) => void
  onPlay?: (idDesk: string) => void
  onSortLastUpdated: () => void
}

type TablesDeskListProps = Omit<ComponentPropsWithoutRef<'table'>, keyof Props> & Props
export const TablesDeskList = forwardRef<ElementRef<'table'>, TablesDeskListProps>((props, ref) => {
  const { desks, onDelete, onEdit, onPlay, onSortLastUpdated, ...rest } = props

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
    <TableComponents.Table {...rest} ref={ref}>
      <TableComponents.Thead>
        <TableComponents.Tr>
          <TableComponents.Th>Name</TableComponents.Th>
          <TableComponents.Th>Cards</TableComponents.Th>
          <TableComponents.Th>
            <ButtonSort onClick={onSortLastUpdated} text={'Last Updated'} />
          </TableComponents.Th>
          <TableComponents.Th>Created by</TableComponents.Th>
          <TableComponents.Th></TableComponents.Th>
        </TableComponents.Tr>
      </TableComponents.Thead>
      <TableComponents.Body>
        {desks.map((desk: Deck) => {
          return (
            <TableComponents.Tr key={desk.id}>
              <TableComponents.Td>{desk.name}</TableComponents.Td>
              <TableComponents.Td>{desk.cardsCount}</TableComponents.Td>
              <TableComponents.Td>{getDateString(desk.updated)}</TableComponents.Td>
              <TableComponents.Td>
                <Tools
                  canUseTool={desk.author.id === desk.userId}
                  onDelete={() => onDeleteHandler(desk.id)}
                  onEdit={() => onEditHandler(desk.id)}
                  onPlay={() => onPlayHandler(desk.id)}
                />
              </TableComponents.Td>
            </TableComponents.Tr>
          )
        })}
      </TableComponents.Body>
    </TableComponents.Table>
  )
})

TablesDeskList.displayName = 'TablesDeskList'
