import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Search } from '@/assets/icons'
import {
  Button,
  ButtonSort,
  Input,
  InputType,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  Typography,
} from '@/common/components/ui'

import s from '@/features/decks/ui/decks.module.scss'

export const TableOtherDeck = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  (props, ref) => {
    const { ...rest } = props

    const [searchParams, setSearchParams] = useSearchParams()

    const searchChangeHandle = (value: string) => {
      if (value.length) {
        searchParams.set('name', value)
      } else {
        searchParams.delete('name')
      }
      setSearchParams(searchParams)
    }

    return (
      <div className={s.container}>
        <div className={s.titleBlock}>
          <Typography as={'h1'} variant={'h1'}>
            {'Friend`s Deck'}
          </Typography>
          <Button> Learn to Pack</Button>
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

        <Table className={s.tables} {...rest} ref={ref}>
          <Thead>
            <Tr>
              <Th>Question</Th>
              <Th>Answer</Th>
              <Th>
                <ButtonSort text={'Last Updated'} />
              </Th>
              <Th>Grade</Th>
            </Tr>
          </Thead>
          <Tbody></Tbody>
        </Table>
      </div>
    )
  }
)
