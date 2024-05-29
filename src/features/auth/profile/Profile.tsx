import { PersonalInformation, ProfileFormData } from '@/features/auth'

import { useGetMeQuery, useUpdateMeMutation } from '../api/authApi'

export const Profile = () => {
  const { data: meData } = useGetMeQuery()
  const [updateProfile] = useUpdateMeMutation()

  const onSubmitProfile = (formData: ProfileFormData) => {
    updateProfile(formData)
  }

  return (
    <PersonalInformation
      email={meData?.email || ''}
      imgSrc={meData?.avatar}
      name={meData?.name || ''}
      onSubmit={onSubmitProfile}
    />
  )
}

Profile.displayName = 'Profile'
