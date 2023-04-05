import type { Meta, StoryObj } from '@storybook/react';

import { MaiIcon } from '.';

const meta = {
  title: 'Atoms/MaiIcon',
  component: MaiIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof MaiIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkmark: Story = {
  args: {
    type: "check"
  }
};

export const Menu: Story = {
  args: {
    type: "menu"
  }
};

export const BulletsVertical: Story = {
  args: {
    type: "more-vert"
  }
};