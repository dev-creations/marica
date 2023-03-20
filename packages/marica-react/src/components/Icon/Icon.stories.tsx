import type { Meta, StoryObj } from '@storybook/react';

import { MaiIcon } from '.';

const meta = {
  title: 'Atoms/MaiIcon',
  component: MaiIcon,
  tags: ['autodocs'],
} satisfies Meta<typeof MaiIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { }
};