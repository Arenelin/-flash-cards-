import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdownSeparator.module.scss'

export const DropdownSeparator = () => {
  return <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
}
