import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import classNames from 'classnames'

import s from './tables.module.scss'
const Table = forwardRef<ElementRef<'table'>, ComponentPropsWithoutRef<'table'>>(
  ({ className, ...rest }, ref) => {
    return <table className={classNames(s.table, className)} {...rest} ref={ref} />
  }
)

const Thead = forwardRef<ElementRef<'thead'>, ComponentPropsWithoutRef<'thead'>>(
  ({ className, ...rest }, ref) => {
    return <thead className={classNames(s.thead, className)} {...rest} ref={ref} />
  }
)

const Body = forwardRef<ElementRef<'tbody'>, ComponentPropsWithoutRef<'tbody'>>(
  ({ className, ...rest }, ref) => {
    return <tbody className={classNames(s.tbody, className)} ref={ref} {...rest} />
  }
)

const Tr = forwardRef<ElementRef<'tr'>, ComponentPropsWithoutRef<'tr'>>(
  ({ className, ...rest }, ref) => {
    return <tr className={classNames(s.tr, className)} {...rest} ref={ref} />
  }
)

const Th = forwardRef<ElementRef<'th'>, ComponentPropsWithoutRef<'th'>>(
  ({ className, ...rest }, ref) => {
    return <th className={classNames(s.th, className)} {...rest} ref={ref} />
  }
)

const Td = forwardRef<ElementRef<'td'>, ComponentPropsWithoutRef<'td'>>(
  ({ className, ...rest }, ref) => {
    return <td className={classNames(s.td, className)} {...rest} ref={ref} />
  }
)

Table.displayName = 'Table'
Thead.displayName = 'Thead'
Body.displayName = 'Body'
Td.displayName = 'Td'
Th.displayName = 'Th'
Tr.displayName = 'Tr'
export const TableComponents = {
  Body,
  Table,
  Td,
  Th,
  Thead,
  Tr,
}
