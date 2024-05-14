import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { LogOutOutline, PersonOutline } from '@/assets/icons'
import logo from '@/assets/logo.png'
import { Button, Dropdown, UserAvatar } from '@/common/components/ui'
import { DropdownSeparator } from '@/common/components/ui/dropdown/dropdownSeparator/DropdownSeparator'
import { ToolbarItemWithIcon } from '@/common/components/ui/dropdown/toolbarItemWithIcon/ToolbarItemWithIcon'
import { DefaultDescription } from '@/common/components/ui/dropdown/toolbarItemWithIcon/defaultDescription/DefaultDescription'
import { ToolbarItemWithUserData } from '@/common/components/ui/dropdown/toolbarItemWithUserData/ToolbarItemWithUserData'
import classNames from 'classnames'

import s from './header.module.scss'

type HeaderProps = {
  isAuthorization: boolean
} & ComponentPropsWithoutRef<'header'>
export const Header = forwardRef<ElementRef<'header'>, HeaderProps>((props, ref) => {
  const { className, isAuthorization = true, ...rest } = props
  //Данные сервера
  const mockUserData = {
    email: 'moroznaya2002@gmail.com',
    img: 'https://alex-artyukhin.ru/wp-content/uploads/2020/05/aleksej-kremnev2.jpg',
    name: 'User',
  }

  return (
    <header className={classNames(s.container, className)} {...rest} ref={ref}>
      <img alt={'logo'} height={'36px'} src={logo} width={'158px'} />
      {isAuthorization ? (
        <Dropdown triggerChild={<UserAvatar name={mockUserData.name} src={mockUserData.img} />}>
          <ToolbarItemWithUserData userData={mockUserData} />
          <DropdownSeparator />
          <ToolbarItemWithIcon
            icon={<PersonOutline />}
            onSelect={() => {
              alert('My Profile')
            }}
            textContent={<DefaultDescription text={'My Profile'} />}
          />
          <DropdownSeparator />

          <ToolbarItemWithIcon
            icon={<LogOutOutline />}
            onSelect={() => {
              alert('Sign Out')
            }}
            textContent={<DefaultDescription text={'Sign Out'} />}
          />
        </Dropdown>
      ) : (
        <Button as={'a'} href={'#'} variant={'secondary'}>
          Sing In
        </Button>
      )}
    </header>
  )
})

Header.displayName = 'Header'
