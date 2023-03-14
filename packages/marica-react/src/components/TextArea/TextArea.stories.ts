import type { Meta, StoryObj } from '@storybook/react';

import { MaiTextArea } from '.';

const meta = {
  title: 'Atoms/MaiTextArea',
  component: MaiTextArea,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof MaiTextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Add your review..."
  },
};
