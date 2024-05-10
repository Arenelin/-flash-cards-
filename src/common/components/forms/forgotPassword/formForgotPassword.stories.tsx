import { FormForgotPassword } from '@/common/components/forms'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: FormForgotPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Forms/ForgotPassword',
} satisfies Meta<typeof FormForgotPassword>

export default meta
type Story = StoryObj<typeof FormForgotPassword>

export const FormForgotPasswordDefault = {
  render() {
    return (
      <div style={{ height: '500px', position: 'relative', width: '100%' }}>
        <FormForgotPassword email={'example@mail.com'} setIsForgotPassword={() => {}} />
      </div>
    )
  },
} satisfies Story
