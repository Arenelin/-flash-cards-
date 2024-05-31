import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import { Search, TrashOutline } from '@/assets/icons'
import { Button, Input, InputType, Pagination, Slider, Tabs, Typography } from '@/common/components'
import { Preloader } from '@/common/components/preloader/Preloader'
import { columnsDecks } from '@/common/consts'
import { path } from '@/common/enums'
import { CreateDecksArgs } from '@/common/types'
import { useCreateDeckById } from '@/features/decks/deckById/lib/useCreateDeckById'
import { useDeleteDeckById } from '@/features/decks/deckById/lib/useDeleteDeckById'
import { useUpdateDeckById } from '@/features/decks/deckById/lib/useUpdateDeckById'
import { ModalDeck } from '@/features/decks/modals/modalDeck/ModalDeck'
import { ModalDelete } from '@/features/decks/modals/modalDelete/ModalDelete'

import s from './decks.module.scss'

import { useDecksList } from './lib/useDecksList'
import { TableDecksList } from './ui/TableDecksList'

export function DecksList() {
  const [deckUpdate, setDeckUpdate] = useState<CreateDecksArgs>()
  const [deckId, setDeckId] = useState<string | undefined>(undefined)
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
    setSort,
    sliderValueHandle,
    sort,
    tabsChangeHandler,
    tabsOptions,
  } = useDecksList()

  const { isLoadingUpdateDeck, requestUpdateDeck, setUpdateModalDeck, updateModalDeck } =
    useUpdateDeckById()
  const { deleteModalDeck, isLoadingDeleteDeck, requestDeleteDeck, setDeleteModalDeck } =
    useDeleteDeckById()
  const { createModalDeck, isLoadingCreateDeck, requestCreateDeck, setCreateModalDeck } =
    useCreateDeckById()
  const onDelete = (id: string, name: string) => {
    setDeleteModalDeck(true)
    setDeckId(id)
    setDeckUpdate({ name: name })
  }
  const onEdit = (id: string, args: CreateDecksArgs) => {
    setUpdateModalDeck(true)
    setDeckUpdate(args)
    setDeckId(id)
  }

  const onAddDeck = () => {
    setCreateModalDeck(true)
  }

  if (isErrorMe) {
    return <Navigate to={path.decks} />
  }

  if (decksIsLoading || isLoadingDeleteDeck || isLoadingCreateDeck || isLoadingUpdateDeck) {
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
        <Button onClick={onAddDeck}>Add New Deck</Button>
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
        columnsDecks={columnsDecks}
        currentUserId={currentUserId}
        decks={decksData?.items}
        onDelete={onDelete}
        onEdit={onEdit}
        onSort={setSort}
        sort={sort}
      />
      <div className={s.paginationSettings}>
        <Pagination totalCount={decksData?.pagination?.totalItems || 1} />
      </div>
      <ModalDeck
        onOpenChange={setCreateModalDeck}
        onSubmit={requestCreateDeck}
        open={createModalDeck}
        title={'Create Deck'}
      />
      <ModalDeck
        defaultValues={deckUpdate}
        onOpenChange={setUpdateModalDeck}
        onSubmit={args => deckId && requestUpdateDeck({ ...args, id: deckId })}
        open={updateModalDeck}
        title={'Edit Deck'}
      />
      <ModalDelete
        onDelete={() => deckId && requestDeleteDeck(deckId)}
        onOpenChange={setDeleteModalDeck}
        open={deleteModalDeck}
        text={`Do you really want to remove ${deckUpdate?.name}?\n` + 'All cards will be deleted.'}
        title={'Delete Deck'}
      />
    </div>
  )
}

DecksList.displayName = 'DecksList'
