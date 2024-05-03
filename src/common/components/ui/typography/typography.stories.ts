import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'h1',
        'h2',
        'h3',
        'h4',
        'body1',
        'subtitle1',
        'body2',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof Typography>

export const H1 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h1',
  },
} satisfies Story

export const H2 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h2',
  },
} satisfies Story

export const H3 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h3',
  },
} satisfies Story

export const H4 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'h4',
  },
} satisfies Story

export const Body1 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'body1',
  },
} satisfies Story

export const Subtitle1 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'subtitle1',
  },
} satisfies Story

export const Body2 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'body2',
  },
} satisfies Story

export const Subtitle2 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'subtitle2',
  },
} satisfies Story

export const Caption = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'caption',
  },
} satisfies Story

export const Overline = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'overline',
  },
} satisfies Story

export const Link1 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'link1',
  },
} satisfies Story

export const Link2 = {
  args: {
    children: 'Carosserie Test Zürich Stauffacherstrasse 31 8004 Zürich, ZH, CH',
    variant: 'link2',
  },
} satisfies Story
