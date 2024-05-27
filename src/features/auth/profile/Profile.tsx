import { useGetMeQuery, useUpdateMeMutation } from '../api/authApi'
import { PersonalInformation, ProfileFormData } from './ui/PersonalInformation'

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
