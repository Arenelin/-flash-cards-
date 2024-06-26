import { Link, NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

import { ArrowArrowBack, Search } from '@/assets/icons'
import CloseOutline from '@/assets/icons/CloseOutline'
import { Button, Input, InputType, Pagination, Typography } from '@/common/components'
import { SettingsDropdown } from '@/common/components/dropdown/settingsDropdown/SettingsDropdown'
import { Preloader } from '@/common/components/preloader/Preloader'
import { columnsCards } from '@/common/consts'
import { path } from '@/common/enums'
import { CardUpdateArgs, ErrorResponse, ErrorResponseField } from '@/common/types'
import { useCreateCardById } from '@/features/cards/lib/useCreateCardById'
import { useDeleteCardById } from '@/features/cards/lib/useDeleteCardById'
import { useUpdateCardById } from '@/features/cards/lib/useUpdateCardById'
import { useDeckById } from '@/features/decks/deckById/lib/useDeckById'
import { useDeleteDeckById } from '@/features/decks/deckById/lib/useDeleteDeckById'
import { useUpdateDeckById } from '@/features/decks/deckById/lib/useUpdateDeckById'
import { TableCardsList } from '@/features/decks/deckById/ui/TableCardsList'
import { ModalCard } from '@/features/decks/modals/ModalCard/ModalCard'
import { ModalDeck } from '@/features/decks/modals/modalDeck/ModalDeck'
import { ModalDelete } from '@/features/decks/modals/modalDelete/ModalDelete'

import s from '@/features/decks/decksList/decks.module.scss'

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
    searchChangeHandle,
    searchParams,
    setSort,
    sort,
  } = useDeckById()

  const {
    dataDeleteCard,
    deleteModalCard,
    isLoadingDeleteCard,
    requestDeleteCard,
    setDataDeleteCard,
    setDeleteModalCard,
  } = useDeleteCardById()
  const {
    dataUpdateTable,
    isLoadingUpdateCard,
    requestUpdate,
    setIdTable,
    setUpdateModal,
    setUpdateTable,
    updateModal,
  } = useUpdateCardById()

  const { deleteModalDeck, isLoadingDeleteDeck, requestDeleteDeck, setDeleteModalDeck } =
    useDeleteDeckById()
  const { createModalCard, isLoadingCreateCard, requestCreate, setCreateModalCard } =
    useCreateCardById()
  const { isLoadingUpdateDeck, requestUpdateDeck, setUpdateModalDeck, updateModalDeck } =
    useUpdateDeckById()

  if (
    isLoadingDeck ||
    isLoadingCards ||
    isLoadingDeleteCard ||
    isLoadingUpdateCard ||
    isLoadingCreateCard ||
    isLoadingDeleteDeck ||
    isLoadingUpdateDeck
  ) {
    return (
      <div className={s.preloader}>
        <Preloader />
      </div>
    )
  }

  if (deckError || cardsError) {
    if (deckError) {
      const errDeck = deckError as ErrorResponse
      const Error = errDeck.data.errorMessages.reduce((acc, error) => {
        return acc + String(error)
      }, '')

      toast.error(Error ?? 'Registration failed')
    }

    if (cardsError) {
      const error = cardsError as ErrorResponseField

      toast.error(error.data.message ?? 'Registration failed')
    }
  }

  const onDelete = (idCard: string, question: string) => {
    setDeleteModalCard(true)
    setDataDeleteCard({ id: idCard, title: question })
  }
  const onEdit = ({ id, ...args }: CardUpdateArgs) => {
    setUpdateTable(args)
    setIdTable(id)
    setUpdateModal(true)
  }

  const onAddCard = () => {
    setCreateModalCard(true)
  }
  const onSelectDelete = () => {
    setDeleteModalDeck(true)
  }

  const onSelectEdit = () => {
    setUpdateModalDeck(true)
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
                {isMy && ' Click add new card to fill this deck'}
              </Typography>
              {isMy && <Button onClick={onAddCard}>Add New Card</Button>}
            </div>
          </div>
        ) : (
          <div className={s.container}>
            <div className={s.titleBlock}>
              <div className={s.containerMyDeck}>
                <Typography as={'h1'} variant={'h1'}>
                  {deck?.name}
                </Typography>
                {isMy && (
                  <SettingsDropdown
                    link={`/decks/${deck?.id || ''}/learn`}
                    onSelectDelete={onSelectDelete}
                    onSelectEdit={onSelectEdit}
                  />
                )}
              </div>
              {isMy ? (
                <Button onClick={onAddCard}>Add New Card</Button>
              ) : (
                <Button as={Link} to={`/decks/${deck?.id || ''}/learn`}>
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
              columnsCards={columnsCards}
              isMy={isMy}
              onDelete={onDelete}
              onEdit={onEdit}
              onSort={setSort}
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
        onDelete={() => dataDeleteCard?.id && requestDeleteCard(dataDeleteCard?.id)}
        onOpenChange={setDeleteModalCard}
        open={deleteModalCard}
        text={`Do you really want to remove ${dataDeleteCard?.title}?\n` + `Card will be deleted.`}
        title={'Delete Card'}
      />
      <ModalCard
        defaultValues={dataUpdateTable}
        onOpenChange={setUpdateModal}
        onSubmit={requestUpdate}
        open={updateModal}
        title={'Edit Card'}
      />
      <ModalCard
        onOpenChange={setCreateModalCard}
        onSubmit={requestCreate}
        open={createModalCard}
        title={'Create Card'}
      />
      <ModalDeck
        defaultValues={deck && { cover: deck?.cover, isPrivate: deck?.isPrivate, name: deck?.name }}
        onOpenChange={setUpdateModalDeck}
        onSubmit={args => deck && requestUpdateDeck({ ...args, id: deck.id })}
        open={updateModalDeck}
        title={'Edit Deck'}
      />
      <ModalDelete
        onDelete={() => deck && requestDeleteDeck(deck.id)}
        onOpenChange={setDeleteModalDeck}
        open={deleteModalDeck}
        text={`Do you really want to remove ${deck?.name}?\n` + 'All cards will be deleted.'}
        title={'Delete Deck'}
      />
    </div>
  )
}

DeckById.displayName = 'DeckById'
