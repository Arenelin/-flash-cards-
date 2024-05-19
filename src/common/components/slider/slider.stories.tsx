import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Slider } from '@/common/components'

const meta = {
  argTypes: { onValueChange: { action: 'slider changes' } },
  component: Slider,
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof Slider>

export const SliderOwn = {
  render() {
    const [value, setValue] = useState([0, 100])

    return (
      <div style={{ backgroundColor: '#c3c1c7', padding: '200px' }}>
        <Slider onValueChange={setValue} value={value} />
      </div>
    )
  },
} satisfies Story
