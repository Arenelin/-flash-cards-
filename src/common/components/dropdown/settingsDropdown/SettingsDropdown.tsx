import { Edit2Outline, MoreVerticalOutline, PlayCircleOutline, TrashOutline } from '@/assets/icons'
import { Dropdown } from '@/common/components'
import { DropdownItem } from '@/common/components/dropdown/dropdownItem/DropdownItem'
import { DefaultDescription } from '@/common/components/dropdown/dropdownItem/defaultDescription/DefaultDescription'
import { DropdownSeparator } from '@/common/components/dropdown/dropdownSeparator/DropdownSeparator'

type Props = {
  onSelectDelete?: () => void
  onSelectEdit?: () => void
  onSelectLearn?: () => void
}
export const SettingsDropdown = ({ onSelectDelete, onSelectEdit, onSelectLearn }: Props) => {
  return (
    <Dropdown trigger={<MoreVerticalOutline />}>
      <DropdownItem onSelect={onSelectLearn}>
        <PlayCircleOutline />
        <DefaultDescription text={'Learn'} />
      </DropdownItem>

      <DropdownSeparator />
      <DropdownItem onSelect={onSelectEdit}>
        <Edit2Outline />
        <DefaultDescription text={'Edit'} />
      </DropdownItem>

      <DropdownSeparator />
      <DropdownItem onSelect={onSelectDelete}>
        <TrashOutline />
        <DefaultDescription text={'Delete'} />
      </DropdownItem>
    </Dropdown>
  )
}
