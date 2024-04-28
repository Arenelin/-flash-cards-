import { ReactNode } from 'react'

import { InputType } from '@/common/components/ui/input/Input'
import classNames from 'classnames'

import s from '@/common/components/ui/input/input.module.scss'

type useInputStyleParameters = {
  iconEnd: ReactNode
  iconStart: ReactNode
  isSearch: boolean
  type: InputType
}
export const useInputStyle = (parameters: useInputStyleParameters): string => {
  const { iconEnd: IconEnd, iconStart: IconStart, type } = parameters
  const isSearch = type === InputType.search
  const inputIconStart = IconStart ? s.iconStart : ''
  const inputEndStart = IconEnd ? s.iconEnd : ''
  const inputSearchIcon = isSearch ? s.search : ''

  return classNames(s.input, inputIconStart, inputEndStart, inputSearchIcon)
}
