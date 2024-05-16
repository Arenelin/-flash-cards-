import { Search } from '@/assets/icons'
import { Input, InputType, Pagination, Slider, Tabs, Typography } from '@/common/components/ui'
import { Preloader } from '@/common/components/ui/preloader/Preloader'
import { ErrorResponse, GetDecksResponse } from '@/common/types'
import { useDecks } from '@/features/desks/lib/useDecks'
import { TablesDeskList } from '@/features/desks/ui/tablesDeskList/TablesDeskList'

import s from './decks.module.scss'

export function Decks() {
  const {
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
    return <Preloader />
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
    <div>
      <Typography as={'h2'} variant={'h2'}>
        Decks list
      </Typography>
      <div className={s.settingsBlock}>
        <Input
          iconStart={<Search />}
          label={'Search'}
          onChange={e => searchChangeHandle(e.currentTarget.value)}
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
      <TablesDeskList className={s.tables} desks={data.items} onSortLastUpdated={() => {}} />
      <div className={s.paginationsettings}>
        <Pagination
          currentPage={data.pagination.currentPage}
          itemsPerPage={data.pagination.itemsPerPage.toString()}
          onPageChange={currentPageHandler}
          pageSizeChange={pageSizeHandler}
          totalCount={2000} //TODO add totalItems from get-request.
          // totalCount={data.pagination.totalItems}
        />
      </div>
    </div>
  )
}
