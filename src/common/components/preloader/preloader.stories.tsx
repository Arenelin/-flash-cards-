import type { Meta, StoryObj } from '@storybook/react'

import { Preloader } from './Preloader'

const meta = {
  component: Preloader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Preloader',
} satisfies Meta<typeof Preloader>

export default meta
type Story = StoryObj<typeof Preloader>

export const PreloaderDemo = {
  render() {
    return <Preloader />
  },
} satisfies Story
