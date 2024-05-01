import { ComponentPropsWithoutRef, ElementRef, forwardRef, useId } from 'react'

import classNames from 'classnames'

import s from './tables.module.scss'
const Table = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, id, ...rest }, ref) => {
    const genID = useId()
    const finalId = id || genID
    const baseClassNames = {
      table: classNames(s.table, className),
    }

    return <table className={baseClassNames.table} id={finalId} ref={ref} {...rest} />
  }
)

const Thead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...rest }, ref) => {
    const baseClassNames = {
      thead: classNames(s.thead, className),
    }

    return <thead className={baseClassNames.thead} ref={ref} {...rest} />
  }
)

const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...rest }, ref) => {
    const baseClassNames = {
      tbody: classNames(s.tbody, className),
    }

    return <tbody className={baseClassNames.tbody} ref={ref} {...rest} />
  }
)

const Tr = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...rest }, ref) => {
    const baseClassNames = {
      tr: classNames(s.tr, className),
    }

    return <tr className={baseClassNames.tr} ref={ref} {...rest} />
  }
)

const Th = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...rest }, ref) => {
    const baseClassNames = {
      th: classNames(s.th, className),
    }

    return <th className={baseClassNames.th} ref={ref} {...rest} />
  }
)

const Td = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    const baseClassNames = {
      td: classNames(s.td, className),
    }

    return <td className={baseClassNames.td} ref={ref} {...rest} />
  }
)

export const TableComponents = {
  Body,
  Table,
  Td,
  Th,
  Thead,
  Tr,
}
