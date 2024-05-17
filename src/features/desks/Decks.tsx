import { Search, TrashOutline } from '@/assets/icons'
import {
  Button,
  Input,
  InputType,
  Pagination,
  Slider,
  Tabs,
  Typography,
} from '@/common/components/ui'
import { Preloader } from '@/common/components/ui/preloader/Preloader'
import { ErrorResponse, GetDecksResponse } from '@/common/types'
import { useDecks } from '@/features/desks/lib/useDecks'
import { TableDecksList } from '@/features/desks/ui/deckTables/TableDecksList'

import s from './decks.module.scss'

export function Decks() {
  const {
    clearFilterHandle,
    currentPageHandler,
    pageSizeHandler,
    searchChangeHandle,
    searchParams,
    setSliderValue,
    sliderValue,
    tabsChangeHandler,
    tabsOptions,
    ...rest
  } = useDecks()

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
        <Input
          iconStart={<Search />}
          onChange={e => searchChangeHandle(e.currentTarget.value)}
          placeholder={'Filter by card name'}
          type={InputType.search}
          value={searchParams.get('name') || ''}
        />
        <Tabs
          label={'Show decks cards'}
          onValueChange={tabsChangeHandler}
          tabs={tabsOptions}
          value={searchParams.get('authorId') ? 'My Cards' : 'All Cards'}
        />
        <Slider label={'Number of cards'} onValueChange={setSliderValue} value={sliderValue} />
        <Button onClick={clearFilterHandle} variant={'secondary'}>
          <TrashOutline /> Clear Filter
        </Button>
      </div>
      <TableDecksList className={s.tables} decks={data.items} onSortLastUpdated={() => {}} />
      <div className={s.paginationSettings}>
        <Pagination
          currentPage={data.pagination.currentPage}
          itemsPerPage={data.pagination.itemsPerPage.toString()}
          onPageChange={currentPageHandler}
          pageSizeChange={pageSizeHandler}
          totalCount={data.pagination.totalItems}
        />
      </div>
    </div>
  )
}
