import { NavLink } from 'react-router-dom'

import { ArrowArrowBack, MoreVerticalOutline, Search } from '@/assets/icons'
import CloseOutline from '@/assets/icons/CloseOutline'
import { Button, Dropdown, Input, InputType, Pagination, Typography } from '@/common/components'
import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'
import { ErrorResponse } from '@/common/types'
import { TableCardsList } from '@/features/decks/ui/deckById/ui/tableCardsList/TableCardsList'

import s from '@/features/decks/ui/decks.module.scss'

import { useCardsList } from './lib/useCardsList'

export const DeckById = () => {
  const {
    cards,
    cardsError,
    deck,
    deckError,
    isLoadingCards,
    isLoadingDeck,
    isMy,
    onClearClick,
    onSortHandler,
    searchChangeHandle,
    searchParams,
    sort,
  } = useCardsList()

  if (isLoadingDeck || isLoadingCards) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  if (deckError || cardsError) {
    const err = (deckError as ErrorResponse) && (cardsError as ErrorResponse)

    return (
      <div className={s.error}>
        {err?.data?.errorMessages?.map(e => {
          return <p key={e.field}>{`at query parameter " ${e.field} " error: " ${e.message} "`}</p>
        })}
      </div>
    )
  }

  const contentSearch = Boolean(searchParams.get('question')) && !cards?.items?.length
  const contentNotCardinDeck = !cards?.items?.length && Boolean(!searchParams.get('question'))

  return (
    <div className={s.main}>
      <Typography as={NavLink} className={s.back} to={path.decks}>
        <ArrowArrowBack /> Back to Decks List
      </Typography>
      <div className={s.container}>
        {contentNotCardinDeck ? (
          <div className={s.emptyCardsBlock}>
            <Typography as={'h1'} variant={'h1'}>
              {deck?.name}
            </Typography>
            {deck?.cover && <img alt={'Image Deck'} className={s.img} src={deck?.cover} />}
            <div className={s.emptyText}>
              <Typography as={'p'} variant={'body1'}>
                This deck is empty.
                {isMy && 'Click add new card to fill this deck'}
              </Typography>
              {isMy && <Button>Add New Card</Button>}
            </div>
          </div>
        ) : (
          <div className={s.container}>
            <div className={s.titleBlock}>
              <div className={s.containerMyDeck}>
                <Typography as={'h1'} variant={'h1'}>
                  {deck?.name}
                </Typography>
                {isMy && <Dropdown triggerChild={<MoreVerticalOutline />} />}
              </div>
              {isMy ? <Button>Add New Card</Button> : <Button>Learn to deck</Button>}
            </div>
            {deck?.cover && <img alt={'Image Deck'} className={s.img} src={deck?.cover} />}
            <div className={s.inputContainer}>
              <Input
                className={s.input}
                iconEnd={<CloseOutline />}
                iconStart={<Search />}
                onChange={e => searchChangeHandle(e.currentTarget.value)}
                onClickIconEnd={onClearClick}
                placeholder={'Input search'}
                type={InputType.search}
                value={searchParams.get('question') || ''}
              />
            </div>
            <TableCardsList cards={cards?.items} isMy={isMy} onSort={onSortHandler} sort={sort} />
            {contentSearch && (
              <Typography className={s.emptySearch} variant={'body1'}>
                Unfortunately, your search returned no results. Try changing the request.
              </Typography>
            )}
          </div>
        )}
      </div>
      <div className={s.paginationSettings}>
        <Pagination totalCount={cards?.pagination.totalItems} />{' '}
      </div>
    </div>
  )
}
