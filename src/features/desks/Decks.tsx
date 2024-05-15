import { Search } from '@/assets/icons'
import { Input, InputType, Pagination, Slider, Tabs, Typography } from '@/common/components/ui'
import { Preloader } from '@/common/components/ui/preloader/Preloader'
import { ErrorResponse } from '@/common/types'
import { useDecks } from '@/features/desks/lib/useDecks'

import s from './decks.module.scss'

export function Decks() {
  const {
    currentPageHandler,
    error,
    isLoading,
    pageSizeHandler,
    searchChangeHandle,
    searchParams,
    setSliderValue,
    sliderValue,
    tabsChangeHandler,
    tabsOptions,
  } = useDecks()

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
