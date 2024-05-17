import { Meta } from '@storybook/react'

import s from '@/assets/icons/_iconGallery_.module.scss'

import * as Icons from './'

export default {
  title: 'Icons Gallery',
} as Meta

export const IconsGallery = () => (
  <div className={s.blockStyle}>
    <div className={s.elementStyle}>
      <Icons.ArrowArrowBack />
      <p className={s.textStyle}>ArrowArrowBack</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.ArrowBack />
      <p className={s.textStyle}>ArrowBack</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.ArrowDown />
      <p className={s.textStyle}>ArrowDown</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.ArrowForward />
      <p className={s.textStyle}>ArrowForward</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.ArrowUp />
      <p className={s.textStyle}>ArrowUp</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.CheckboxIcon />
      <p className={s.textStyle}>CheckboxIcon</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.CheckEmail />
      <p className={s.textStyle}>CheckEmail</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.Close />
      <p className={s.textStyle}>Close</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.CloseOutline />
      <p className={s.textStyle}>CloseOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.Edit2 />
      <p className={s.textStyle}>Edit2</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.Edit2Outline />
      <p className={s.textStyle}>Edit2Outline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.Eye />
      <p className={s.textStyle}>Eye</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.EyeOff />
      <p className={s.textStyle}>EyeOff</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.EyeOffOutline />
      <p className={s.textStyle}>EyeOffOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.EyeOutline />
      <p className={s.textStyle}>EyeOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.Image />
      <p className={s.textStyle}>Image</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.ImageOutline />
      <p className={s.textStyle}>ImageOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.LogOut />
      <p className={s.textStyle}>LogOut</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.LogOutOutline />
      <p className={s.textStyle}>LogOutOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.MoreVerticalOutline />
      <p className={s.textStyle}>MoreVerticalOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.Person />
      <p className={s.textStyle}>ArrowPersonBack</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.PersonOutline />
      <p className={s.textStyle}>PersonOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.PlayCircle />
      <p className={s.textStyle}>PlayCircle</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.PlayCircleOutline />
      <p className={s.textStyle}>PlayCircleOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.Search />
      <p className={s.textStyle}>Search</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.SearchOutline />
      <p className={s.textStyle}>SearchOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.Star />
      <p className={s.textStyle}>Star</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.StarOutline />
      <p className={s.textStyle}>StarOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.Trash />
      <p className={s.textStyle}>Trash</p>
    </div>
    <div className={s.elementStyle}>
      <Icons.TrashOutline />
      <p className={s.textStyle}>TrashOutline</p>
    </div>
  </div>
)
