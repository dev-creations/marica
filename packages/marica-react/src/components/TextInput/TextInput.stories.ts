import type { Meta, StoryObj } from '@storybook/react';

import { MaiTextInput } from '.';

const meta = {
  title: 'Atoms/MaiTextInput',
  component: MaiTextInput,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof MaiTextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: "Username"
  },
};

export const Date: Story = {
  args: {
    placeholder: "Date",
    type: "date"
  },
};