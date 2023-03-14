import type { Meta, StoryObj } from '@storybook/react';

import { MaiAvatar } from '.';

const meta = {
  title: 'Atoms/MaiAvatar',
  component: MaiAvatar,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    notifications: {control: 'number'},
  },
} satisfies Meta<typeof MaiAvatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    username: "Enrico Gruner"
  },
};

export const WithNotification: Story = {
  args: {
    username: "Enrico Gruner",
    notifications: 2
  },
};

export const WithImage: Story = {
  args: {
    username: "Xuena Li",
    image: "/img/ava.avif"
  }
}