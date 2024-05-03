import ArrowBack from '@/assets/icons/components/ArrowBack'
import ArrowDown from '@/assets/icons/components/ArrowDown'
import ArrowForward from '@/assets/icons/components/ArrowForward'
import ArrowUp from '@/assets/icons/components/ArrowUp'
import CheckboxIcon from '@/assets/icons/components/CheckboxIcon'
import Close from '@/assets/icons/components/Close'
import CloseOutline from '@/assets/icons/components/CloseOutline'
import Edit2 from '@/assets/icons/components/Edit2'
import Edit2Outline from '@/assets/icons/components/Edit2Outline'
import Eye from '@/assets/icons/components/Eye'
import EyeOff from '@/assets/icons/components/EyeOff'
import EyeOffOutline from '@/assets/icons/components/EyeOffOutline'
import EyeOutline from '@/assets/icons/components/EyeOutline'
import Image from '@/assets/icons/components/Image'
import ImageOutline from '@/assets/icons/components/ImageOutline'
import LogOut from '@/assets/icons/components/LogOut'
import LogOutOutline from '@/assets/icons/components/LogOutOutline'
import MoreVerticalOutline from '@/assets/icons/components/MoreVerticalOutline'
import Person from '@/assets/icons/components/Person'
import PersonOutline from '@/assets/icons/components/PersonOutline'
import PlayCircle from '@/assets/icons/components/PlayCircle'
import PlayCircleOutline from '@/assets/icons/components/PlayCircleOutline'
import Search from '@/assets/icons/components/Search'
import SearchOutline from '@/assets/icons/components/SearchOutline'
import Star from '@/assets/icons/components/Star'
import StarOutline from '@/assets/icons/components/StarOutline'
import Trash from '@/assets/icons/components/Trash'
import TrashOutline from '@/assets/icons/components/TrashOutline'
import { Meta } from '@storybook/react'

import s from './_IconGallery_.module.scss'

export default {
  title: 'Icons Gallery',
} as Meta

export const IconsGallery = () => (
  <div className={s.blockStyle}>
    <div className={s.elementStyle}>
      <ArrowBack />
      <p className={s.textStyle}>&nbsp; ArrowBack</p>
    </div>
    <div className={s.elementStyle}>
      <ArrowDown />
      <p className={s.textStyle}>ArrowDown</p>
    </div>
    <div className={s.elementStyle}>
      <ArrowForward />
      <p className={s.textStyle}>&nbsp; ArrowForward</p>
    </div>
    <div className={s.elementStyle}>
      <ArrowUp />
      <p className={s.textStyle}>ArrowUp</p>
    </div>
    <div className={s.elementStyle}>
      <CheckboxIcon />
      <p className={s.textStyle}>&nbsp; CheckboxIcon</p>
    </div>
    <div className={s.elementStyle}>
      <Close />
      <p className={s.textStyle}>Close</p>
    </div>
    <div className={s.elementStyle}>
      <CloseOutline />
      <p className={s.textStyle}>CloseOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Edit2 />
      <p className={s.textStyle}>Edit2</p>
    </div>
    <div className={s.elementStyle}>
      <Edit2Outline />
      <p className={s.textStyle}>Edit2Outline</p>
    </div>
    <div className={s.elementStyle}>
      <Eye />
      <p className={s.textStyle}>Eye</p>
    </div>
    <div className={s.elementStyle}>
      <EyeOff />
      <p className={s.textStyle}>EyeOff</p>
    </div>
    <div className={s.elementStyle}>
      <EyeOffOutline />
      <p className={s.textStyle}>EyeOffOutline</p>
    </div>
    <div className={s.elementStyle}>
      <EyeOutline />
      <p className={s.textStyle}>EyeOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Image />
      <p className={s.textStyle}>Image</p>
    </div>
    <div className={s.elementStyle}>
      <ImageOutline />
      <p className={s.textStyle}>ImageOutline</p>
    </div>
    <div className={s.elementStyle}>
      <LogOut />
      <p className={s.textStyle}>LogOut</p>
    </div>
    <div className={s.elementStyle}>
      <LogOutOutline />
      <p className={s.textStyle}>LogOutOutline</p>
    </div>
    <div className={s.elementStyle}>
      <MoreVerticalOutline />
      <p className={s.textStyle}>MoreVerticalOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Person />
      <p className={s.textStyle}>ArrowPersonBack</p>
    </div>
    <div className={s.elementStyle}>
      <PersonOutline />
      <p className={s.textStyle}>PersonOutline</p>
    </div>
    <div className={s.elementStyle}>
      <PlayCircle />
      <p className={s.textStyle}>PlayCircle</p>
    </div>
    <div className={s.elementStyle}>
      <PlayCircleOutline />
      <p className={s.textStyle}>PlayCircleOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Search />
      <p className={s.textStyle}>Search</p>
    </div>
    <div className={s.elementStyle}>
      <SearchOutline />
      <p className={s.textStyle}>SearchOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Star />
      <p className={s.textStyle}>Star</p>
    </div>
    <div className={s.elementStyle}>
      <StarOutline />
      <p className={s.textStyle}>StarOutline</p>
    </div>
    <div className={s.elementStyle}>
      <Trash />
      <p className={s.textStyle}>Trash</p>
    </div>
    <div className={s.elementStyle}>
      <TrashOutline />
      <p className={s.textStyle}>TrashOutline</p>
    </div>
  </div>
)
