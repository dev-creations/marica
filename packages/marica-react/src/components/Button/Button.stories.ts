import type { Meta, StoryObj } from '@storybook/react';

import { MaiButton } from '.';

const meta = {
  title: 'Atoms/MaiButton',
  component: MaiButton,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof MaiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary"
  },
};

export const Inactive: Story = {
  args: {
    children: "Inactive",
    disabled: true
  },
};