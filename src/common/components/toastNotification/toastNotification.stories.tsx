import type { Meta, StoryObj } from '@storybook/react'

import { toast } from 'react-toastify'

import { Button } from '@/common/components'
import { ToastNotification } from '@/common/components/toastNotification/ToastNotification'

const meta = {
  component: ToastNotification,
  tags: ['autodocs'],
  title: 'Components/ToastNotification',
} satisfies Meta<typeof ToastNotification>

export default meta
type Story = StoryObj<typeof ToastNotification>

export const NotificationSuccess = {
  render: () => {
    const notify = () => toast.success('This is a toast notification !')

    return (
      <>
        <Button onClick={notify}>Success</Button>
        <ToastNotification />
      </>
    )
  },
} satisfies Story

export const NotificationError = {
  render: () => {
    const notify = () => toast.error('This is a toast notification !')

    return (
      <>
        <Button onClick={notify}>Error</Button>
        <ToastNotification />
      </>
    )
  },
} satisfies Story
