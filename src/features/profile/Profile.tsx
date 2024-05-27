import { MeResponse } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'

import { PersonalInformation, ProfileFormData } from './ui/personalInformation/PersonalInformation'

export const Profile = () => {
  const { data: meData } = useGetMeQuery()

  const data = meData as MeResponse
  const onSubmitProfile = (formData: ProfileFormData) => {
    // signIn(formData).unwrap()
    alert(formData)
  }

  return (
    <PersonalInformation
      email={data.email}
      imgSrc={data.avatar}
      name={data.name}
      onSubmit={onSubmitProfile}
    />
  )
}
