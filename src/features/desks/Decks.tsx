import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Input, InputType, Pagination, Slider, Tab, Tabs, Typography } from '@/common/components/ui'
import { Preloader } from '@/common/components/ui/preloader/Preloader'
import { ErrorResponse } from '@/common/types'
import { useGetDecksQuery } from '@/features/desks/api/decksApi'

import s from './decks.module.scss'

export function Decks() {
  const [searchParams, setSearchParams] = useSearchParams()
  //input search params
  const handleSearchChange = (value: string) => {
    if (value.length) {
      searchParams.set('name', value)
    } else {
      searchParams.delete('name')
    }
    setSearchParams(searchParams)
  }
  //tabs search params
  const tabsOptions: Tab[] = [
    {
      disabled: false,
      text: 'My Cards',
      value: 'My Cards',
    },
    {
      disabled: false,
      text: 'All Cards',
      value: 'All Cards',
    },
  ]
  const tabsChangeHandler = (value: string) => {
    if (value === 'My Cards') {
      searchParams.set('authorId', 'My Cards') //TODO add id from me-request
    } else {
      searchParams.delete('authorId')
    }
    setSearchParams(searchParams)
  }
  //slider search params
  const min = Number(searchParams.get('minCardsCount')) || 0
  const max = Number(searchParams.get('maxCardsCount')) || 100

  const [sliderValue, setSliderValue] = useState([min, max])

  useEffect(() => {
    searchParams.set('minCardsCount', sliderValue[0].toString())
    searchParams.set('maxCardsCount', sliderValue[1].toString())
    sliderValue[0] === 0 && searchParams.delete('minCardsCount')
    sliderValue[1] === 100 && searchParams.delete('maxCardsCount')
    setSearchParams(searchParams)
  }, [sliderValue, searchParams, setSearchParams])
  //pagination search params
  const pageSizeHandler = (itemsPerPage: string) => {
    searchParams.set('itemsPerPage', itemsPerPage)
    setSearchParams(searchParams)
  }
  const currentPageHandler = (currentPage: number) => {
    searchParams.set('currentPage', currentPage.toString())
    setSearchParams(searchParams)
  }

  // const { data, error, isLoading } = useGetDecksQuery({
  const { error, isLoading } = useGetDecksQuery({
    authorId: searchParams.get('authorId') || undefined, // пока нет реального айди выкидывает ошибку
    currentPage: Number(searchParams.get('currentPage')) || 1,
    itemsPerPage: Number(searchParams.get('itemsPerPage')) || 10,
    maxCardsCount: Number(searchParams.get('maxCardsCount')) || 0,
    minCardsCount: Number(searchParams.get('minCardsCount')) || 100,
    name: searchParams.get('name') || undefined,
    // orderBy?: string,
  })

  if (isLoading) {
    return <Preloader />
  }

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

  return (
    <div>
      <Typography as={'h2'} variant={'h2'}>
        Decks list
      </Typography>
      <div className={s.settingsBlock}>
        <Input
          label={'Search'}
          onChange={e => handleSearchChange(e.currentTarget.value)}
          type={InputType.search}
          value={searchParams.get('name') || ''}
        />
        <Tabs
          onValueChange={tabsChangeHandler}
          tabs={tabsOptions}
          value={searchParams.get('authorId') ? 'My Cards' : 'All Cards'}
        />
        <Slider onValueChange={setSliderValue} value={sliderValue} />
      </div>
      <div>Here is Alina`s Table component with Deck[] props</div>
      <div className={s.paginationsettings}>
        <Pagination
          currentPage={Number(searchParams.get('currentPage')) || 1}
          itemsPerPage={searchParams.get('itemsPerPage') || '10'}
          onPageChange={currentPageHandler}
          pageSizeChange={pageSizeHandler}
          totalCount={2000} //TODO add totalCount from get-request
        />
      </div>
    </div>
  )
}
