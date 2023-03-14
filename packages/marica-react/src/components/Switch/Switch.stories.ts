import type { Meta, StoryObj } from '@storybook/react';

import { MaiSwitch } from '.';

const meta = {
  title: 'Atoms/MaiSwitch',
  component: MaiSwitch,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    onClick: { action: 'clicked' }
  },
} satisfies Meta<typeof MaiSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Switch"
  },
};