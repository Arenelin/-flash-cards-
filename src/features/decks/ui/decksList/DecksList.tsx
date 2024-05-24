import { Navigate } from 'react-router-dom'

import { Search, TrashOutline } from '@/assets/icons'
import { Button, Input, InputType, Pagination, Slider, Tabs, Typography } from '@/common/components'
import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'

import s from '../decks.module.scss'

import { useDecksList } from './lib/useDecksList'
import { TableDecksList } from './ui/tableDecksList/TableDecksList'

export function DecksList() {
  const {
    clearFilterHandle,
    decksData,
    decksError,
    decksIsLoading,
    isAuthorization,
    maxCardsCount,
    minCardsCount,
    searchChangeHandle,
    searchParams,
    sliderValueHandle,
    tabsChangeHandler,
    tabsOptions,
  } = useDecksList()

  const onPlay = (id: string) => <Navigate to={`${path.decks}/${id}`} />

  if (!isAuthorization) {
    return <Navigate to={path.signIn} />
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
        {decksError.map(e => (
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
        decks={decksData?.items}
        onPlay={onPlay}
        onSort={() => {}}
        sort={'asc'}
      />
      <div className={s.paginationSettings}>
        <Pagination totalCount={decksData?.pagination.totalItems} />
      </div>
    </div>
  )
}
