import { LogOutOutline, PersonOutline } from '@/assets/icons'
import { Dropdown, Typography, UserAvatar } from '@/common/components'
import { DropdownItem } from '@/common/components/dropdown/dropdownItem/DropdownItem'
import { DefaultDescription } from '@/common/components/dropdown/dropdownItem/defaultDescription/DefaultDescription'
import { DropdownSeparator } from '@/common/components/dropdown/dropdownSeparator/DropdownSeparator'
import { UserDropdownTrigger } from '@/common/components/dropdown/userDropdown/userDropdownTrigger/UserDropdownTrigger'

import s from './userDropdown.module.scss'

type Props = {
  email?: string
  img?: string
  name?: string
  onSelectLogOut?: () => void
  onSelectProfile?: () => void
}
const UserDropdown = ({ email, img, name, onSelectLogOut, onSelectProfile }: Props) => {
  return (
    <Dropdown trigger={<UserDropdownTrigger name={name} src={img} />}>
      <DropdownItem>
        <UserAvatar name={name} src={img} />
        <div className={s.dataContainer}>
          <Typography as={'span'} className={s.name} variant={'subtitle2'}>
            {name}
          </Typography>
          <Typography as={'span'} className={s.email} variant={'caption'}>
            {email}
          </Typography>
        </div>
      </DropdownItem>

      <DropdownSeparator />
      <DropdownItem onSelect={onSelectProfile}>
        <PersonOutline />
        <DefaultDescription text={'My Profile'} />
      </DropdownItem>

      <DropdownSeparator />
      <DropdownItem onSelect={onSelectLogOut}>
        <LogOutOutline />
        <DefaultDescription text={'Sign Out'} />
      </DropdownItem>
    </Dropdown>
  )
}

export default UserDropdown

UserDropdown.displayName = 'UserDropdown'
