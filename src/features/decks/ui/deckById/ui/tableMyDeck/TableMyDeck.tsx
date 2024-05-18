import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSearchParams } from 'react-router-dom'

import { MoreVerticalOutline, Search } from '@/assets/icons'
import {
  Button,
  ButtonSort,
  Dropdown,
  Input,
  InputType,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tools,
  Tr,
  Typography,
} from '@/common/components/ui'
import { Preloader } from '@/common/components/ui/preloader/Preloader'
import { ErrorResponse, GetDeckCardsResponse } from '@/common/types'
import { useGetDeckCardsQuery } from '@/features/decks/api/decksApi'

import s from '@/features/decks/ui/decks.module.scss'

type Props = { deckId: string } & ComponentPropsWithoutRef<'table'>

export const TableMyDeck = forwardRef<ElementRef<'table'>, Props>((props, ref) => {
  const { deckId, ...rest } = props

  const { data, error, isLoading } = useGetDeckCardsQuery({ id: deckId })
  const [searchParams, setSearchParams] = useSearchParams()

  if (error) {
    const err = error as ErrorResponse

    return (
      <div className={s.error}>
        {err.data.errorMessages.map(e => {
          return <p key={e.field}>{`at query parameter " ${e.field} " error: " ${e.message} "`}</p>
        })}
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  const searchChangeHandle = (value: string) => {
    if (value.length) {
      searchParams.set('name', value)
    } else {
      searchParams.delete('name')
    }
    setSearchParams(searchParams)
  }
  const cardsData = data as GetDeckCardsResponse

  return (
    <div className={s.container}>
      <div className={s.titleBlock}>
        <div>
          <Typography as={'h1'} variant={'h1'}>
            {'My Deck'}
          </Typography>
          <Dropdown triggerChild={<MoreVerticalOutline />} />
        </div>

        <Button>Add New Card</Button>
      </div>
      <div className={s.inputContainer}>
        <Input
          className={s.input}
          iconStart={<Search />}
          onChange={e => searchChangeHandle(e.currentTarget.value)}
          placeholder={'Input search'}
          type={InputType.search}
          value={searchParams.get('name') || ''}
        />
      </div>
      {!cardsData.items.length ? (
        <Typography as={'h1'} variant={'h1'}>
          Cards list is empty
        </Typography>
      ) : (
        <Table className={s.tables} {...rest} ref={ref}>
          <Thead>
            <Tr>
              <Th>Question</Th>
              <Th>Answer</Th>
              <Th>
                <ButtonSort text={'Last Updated'} />
              </Th>
              <Th>Grade</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cardsData.items.map(card => {
              return (
                <Tr key={card.id}>
                  <Td>{card.question}</Td>
                  <Td>{card.answer}</Td>
                  <Td>{card.updated}</Td>
                  <Td>{card.grade}</Td>
                  <Td>
                    <Tools canUsePlay={false} onDelete={() => {}} onEdit={() => {}} />
                  </Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      )}
    </div>
  )
})
