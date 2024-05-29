import { Navigate } from 'react-router-dom'

import { Search, TrashOutline } from '@/assets/icons'
import { Button, Input, InputType, Pagination, Slider, Tabs, Typography } from '@/common/components'
import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'

import s from './decks.module.scss'

import { useDecksList } from './lib/useDecksList'
import { TableDecksList } from './ui/TableDecksList'

export function DecksList() {
  const {
    clearFilterHandle,
    currentUserId,
    decksData,
    decksError,
    decksIsLoading,
    isErrorMe,
    maxCardsCount,
    minCardsCount,
    searchChangeHandle,
    searchParams,
    sliderValueHandle,
    tabsChangeHandler,
    tabsOptions,
  } = useDecksList()

  if (isErrorMe) {
    return <Navigate to={path.decks} />
  }
  if (decksIsLoading) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  if (decksError) {
    return (
      <div className={s.error}>
        {decksError?.map(e => (
          <p key={e.field}>{`at query parameter " ${e.field} " error: " ${e.message} "`}</p>
        ))}
      </div>
    )
  }

  return (
    <div className={s.main}>
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
          label={'Number of cards in deck'}
          max={maxCardsCount}
          min={minCardsCount}
          onValueChange={e => sliderValueHandle(e)}
          value={[
            Number(searchParams.get('minCardsCount')) || minCardsCount,
            Number(searchParams.get('maxCardsCount')) || maxCardsCount,
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
        currentUserId={currentUserId}
        decks={decksData?.items}
        onSort={() => {}}
        sort={'asc'}
      />
      <div className={s.paginationSettings}>
        <Pagination totalCount={decksData?.pagination?.totalItems || 1} />
      </div>
    </div>
  )
}

DecksList.displayName = 'DecksList'
