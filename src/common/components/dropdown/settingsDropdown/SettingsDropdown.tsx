import { Link } from 'react-router-dom'

import { Edit2Outline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { Dropdown } from '@/common/components'
import { DropdownItem } from '@/common/components/dropdown/dropdownItem/DropdownItem'
import { DefaultDescription } from '@/common/components/dropdown/dropdownItem/defaultDescription/DefaultDescription'
import { DropdownSeparator } from '@/common/components/dropdown/dropdownSeparator/DropdownSeparator'

import s from './settingsDropdown.module.scss'
type Props = {
  link: string
  onSelectDelete?: () => void
  onSelectEdit?: () => void
}
export const SettingsDropdown = ({ link, onSelectDelete, onSelectEdit }: Props) => {
  return (
    <Dropdown trigger={<MoreVerticalOutline className={s.iconMenu} />}>
      <DropdownItem asChild>
        <Link to={link}>
          <PlayCircleOutline className={s.icon} />
          <DefaultDescription className={s.description} text={'Learn'} />
        </Link>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem onSelect={onSelectEdit}>
        <Edit2Outline />
        <DefaultDescription className={s.description} text={'Edit'} />
      </DropdownItem>

      <DropdownSeparator />
      <DropdownItem onSelect={onSelectDelete}>
        <TrashOutline />
        <DefaultDescription className={s.description} text={'Delete'} />
      </DropdownItem>
    </Dropdown>
  )
}

SettingsDropdown.displayName = 'SettingsDropdown'
