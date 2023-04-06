import type { Meta, StoryObj } from '@storybook/react';

import { MaiElevated } from '.';

const meta = {
  title: 'Atoms/MaiElevated',
  component: MaiElevated,
  tags: ['autodocs'],
  argTypes: { },
  args: { },
} satisfies Meta<typeof MaiElevated>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>aaa</>
  }
};
