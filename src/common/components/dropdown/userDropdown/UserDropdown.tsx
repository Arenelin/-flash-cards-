import { LogOutOutline, PersonOutline } from '@/assets/icons'
import { Dropdown, Typography, UserAvatar } from '@/common/components'
import { DropdownItem } from '@/common/components/dropdown/dropdownItem/DropdownItem'
import { DefaultDescription } from '@/common/components/dropdown/dropdownItem/defaultDescription/DefaultDescription'
import { DropdownSeparator } from '@/common/components/dropdown/dropdownSeparator/DropdownSeparator'

import s from './userDropdown.module.scss'

type Props = {
  email: string
  img: string
  name: string
}
const UserDropdown = ({ email, img, name }: Props) => {
  return (
    <Dropdown trigger={<UserAvatar name={name} src={img} />}>
      <UserAvatar name={name} src={img} />
      <div className={s.dataContainer}>
        <Typography as={'span'} className={s.name} variant={'subtitle2'}>
          {name}
        </Typography>
        <Typography as={'span'} className={s.email} variant={'caption'}>
          {email}
        </Typography>
      </div>

      <DropdownSeparator />
      <DropdownItem onSelect={() => alert('My Profile')}>
        <PersonOutline />
        <DefaultDescription text={'My Profile'} />
      </DropdownItem>

      <DropdownSeparator />
      <DropdownItem onSelect={() => alert('Sign Out')}>
        <LogOutOutline />
        <DefaultDescription text={'Sign Out'} />
      </DropdownItem>
    </Dropdown>
  )
}

export default UserDropdown
