import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ArrowArrowBack, Search } from '@/assets/icons'
import CloseOutline from '@/assets/icons/CloseOutline'
import { Button, Input, InputType, Pagination, Typography } from '@/common/components'
import { SettingsDropdown } from '@/common/components/dropdown/settingsDropdown/SettingsDropdown'
import { Preloader } from '@/common/components/preloader/Preloader'
import { path } from '@/common/enums'
import { ErrorResponse, ErrorResponseCard } from '@/common/types'
import { useCardsList } from '@/features/decks/ui/deckById/lib/useCardsList'
import { useDeleteCardId } from '@/features/decks/ui/deckById/lib/useDeleteCardId'
import { TableCardsList } from '@/features/decks/ui/deckById/ui/tableCardsList/TableCardsList'
import { ModalDelete } from '@/features/modals/modalDelete/ModalDelete'

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
    onClearClick,
    onSortHandler,
    searchChangeHandle,
    searchParams,
    sort,
  } = useCardsList()

  const {
    dataTableDelete,
    deleteModal,
    isLoadingError,
    requestDeletion,
    setDataTableDelete,
    setDeleteModal,
  } = useDeleteCardId()

  if (isLoadingDeck || isLoadingCards || isLoadingError) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  if (deckError || cardsError) {
    if (deckError) {
      const errDeck: ErrorResponse = deckError as ErrorResponse
      const Error = errDeck.data.errorMessages.reduce((acc, error) => {
        return acc + String(error)
      }, '')

      toast.error(Error ?? 'Registration failed')
    }

    if (cardsError) {
      const error = cardsError as ErrorResponseCard

      toast.error(error.data.message ?? 'Registration failed')
    }
  }

  const onDelete = (idCard: string, question: string) => {
    setDeleteModal(true)
    setDataTableDelete({ id: idCard, title: question })
  }

  const contentSearch = Boolean(searchParams.get('question')) && !cards?.items?.length
  const contentNotCardInDeck = !cards?.items?.length && Boolean(!searchParams.get('question'))

  return (
    <div className={s.main}>
      <Typography as={NavLink} className={s.back} to={path.decks}>
        <ArrowArrowBack /> Back to Decks List
      </Typography>
      <div className={s.container}>
        {contentNotCardInDeck ? (
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
                {isMy && <SettingsDropdown />}
              </div>
              {isMy ? (
                <Button> Add New Card </Button>
              ) : (
                <Button as={Link} to={`/deck/${deck?.id || ''}/learn`}>
                  Learn to deck
                </Button>
              )}
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
            <TableCardsList
              cards={cards?.items}
              isMy={isMy}
              onDelete={onDelete}
              onSort={onSortHandler}
              sort={sort}
            />
            {contentSearch && (
              <Typography className={s.emptySearch} variant={'body1'}>
                Unfortunately, your search returned no results. Try changing the request.
              </Typography>
            )}
          </div>
        )}
      </div>
      <div className={s.paginationSettings}>
        <Pagination totalCount={cards?.pagination.totalItems || 1} />{' '}
      </div>
      <ModalDelete
        onDelete={requestDeletion}
        onOpenChange={setDeleteModal}
        open={deleteModal}
        text={`Do you really want to remove ${dataTableDelete?.title}?\n` + `Card will be deleted.`}
        title={'Delete Card'}
      />
    </div>
  )
}
