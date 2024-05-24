import { MeResponse } from '@/common/types'
import { useGetMeQuery } from '@/features/auth/api/authApi'
import {
  PersonalInformation,
  ProfileFormData,
} from '@/features/profile/ui/personalInformation/PersonalInformation'
import { Page } from '@/router/ui/page/Page'

export const PageProfile = () => {
  const { data: meData } = useGetMeQuery()

  const data = meData as MeResponse
  const onSubmitProfile = (formData: ProfileFormData) => {
    // signIn(formData).unwrap()
    alert(formData)
  }

  return (
    <Page>
      <PersonalInformation
        email={data.email}
        imgSrc={data.avatar}
        name={data.name}
        onSubmit={onSubmitProfile}
      />
    </Page>
  )
}
