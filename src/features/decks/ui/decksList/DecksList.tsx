import { Navigate } from 'react-router-dom'

import { Search, TrashOutline } from '@/assets/icons'
import { Button, Input, InputType, Pagination, Slider, Tabs, Typography } from '@/common/components'
import { Preloader } from '@/common/components/preloader/Preloader'
import { ErrorResponse, GetDecksResponse } from '@/common/types'
import { useDecksList } from '@/features/decks/ui/decksList/lib/useDecksList'
import { TableDecksList } from '@/features/decks/ui/decksList/ui/tableDecksList/TableDecksList'

import s from '@/features/decks/ui/decks.module.scss'

export function DecksList() {
  const {
    clearFilterHandle,
    currentPageHandler,
    pageSizeHandler,
    searchChangeHandle,
    searchParams,
    sliderValueHandle,
    tabsChangeHandler,
    tabsOptions,
    ...rest
  } = useDecksList()

  const onPlay = (id: string) => <Navigate to={`decks/${id}`} />

  if (rest.isLoading) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  if (rest.error) {
    const error = rest.error as ErrorResponse

    return (
      <div className={s.error}>
        {error.data.errorMessages.map(e => {
          return <p key={e.field}>{`at query parameter " ${e.field} " error: " ${e.message} "`}</p>
        })}
      </div>
    )
  }

  const data = rest.data as GetDecksResponse

  return (
    <div className={s.container}>
      <div className={s.titleBlock}>
        <Typography as={'h1'} variant={'h1'}>
          Decks list
        </Typography>
        <Button>Add New Deck</Button>
      </div>
      <div className={s.settingsBlock}>
        <div>
          <Input
            iconStart={<Search />}
            onChange={e => searchChangeHandle(e.currentTarget.value)}
            placeholder={'Filter by cards name'}
            type={InputType.search}
            value={searchParams.get('name') || ''}
          />
        </div>
        <Tabs
          label={'Show decks cards'}
          onValueChange={tabsChangeHandler}
          tabs={tabsOptions}
          value={searchParams.get('authorId') ? 'My Cards' : 'All Cards'}
        />
        <Slider
          label={'Number of cards'}
          onValueChange={e => sliderValueHandle(e)}
          value={[
            Number(searchParams.get('minCardsCount')) || 0,
            Number(searchParams.get('maxCardsCount')) || 100,
          ]}
        />
        <Button
          onClick={clearFilterHandle}
          style={{ minWidth: '150px', padding: '6px' }}
          variant={'secondary'}
        >
          <TrashOutline />
          Clear Filter
        </Button>
      </div>
      <TableDecksList
        className={s.tables}
        decks={data.items}
        onPlay={onPlay}
        onSort={() => {}}
        sort={'asc'}
      />
      <div className={s.paginationSettings}>
        <Pagination totalCount={data.pagination.totalItems} />
      </div>
    </div>
  )
}
