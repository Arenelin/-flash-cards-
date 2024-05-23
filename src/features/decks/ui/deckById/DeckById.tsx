import { NavLink } from 'react-router-dom'

import { ArrowArrowBack, MoreVerticalOutline, Search } from '@/assets/icons'
import { Button, Dropdown, Input, InputType, Pagination, Typography } from '@/common/components'
import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'
import { ErrorResponse } from '@/common/types'
import { useCardsList } from '@/features/decks/ui/deckById/lib/useCardsList'
import { TableCardsList } from '@/features/decks/ui/deckById/ui/tableCardsList/TableCardsList'

import s from '@/features/decks/ui/decks.module.scss'

export const DeckById = () => {
  const {
    cards,
    cardsError,
    deck,
    deckError,
    isLoadingCards,
    isLoadingDeck,
    isMy,
    onSortLastUpdated,
    searchChangeHandle,
    searchParams,
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

  return (
    <div className={s.containerAllContent}>
      <Button as={NavLink} to={path.decks}>
        <ArrowArrowBack /> Back to Decks List
      </Button>
      <div className={s.container}>
        {!cards?.items?.length ? (
          <div className={s.emptyCardsBlock}>
            <Typography as={'h1'} variant={'h1'}>
              {deck?.name}
            </Typography>
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
              <div>
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
                iconStart={<Search />}
                onChange={e => searchChangeHandle(e.currentTarget.value)}
                placeholder={'Input search'}
                type={InputType.search}
                value={searchParams.get('name') || ''}
              />
            </div>
            <TableCardsList
              cards={cards?.items}
              isMy={isMy}
              onSortLastUpdated={onSortLastUpdated}
            />
          </div>
        )}
      </div>
      <div className={s.paginationSettings}>
        <Pagination totalCount={deck?.cardsCount} /> {/* TODO set current value from request*/}
      </div>
    </div>
  )
}
