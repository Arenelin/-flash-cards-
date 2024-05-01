import type { Meta, StoryObj } from '@storybook/react'

import { Slider } from '@/common/components/ui'

const meta = {
  argTypes: { onValueChange: { action: 'slider changes' } },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof Slider>

export const SliderOwn = {
  args: {
    value: [0, 100],
  },
} satisfies Story
