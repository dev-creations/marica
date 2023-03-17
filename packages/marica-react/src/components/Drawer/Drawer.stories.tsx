import type { Meta, StoryObj } from '@storybook/react';

import { MaiDrawer } from '.';

const meta = {
  title: 'Atoms/MaiDrawer',
  component: MaiDrawer,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'mai-drawer-close' }
  },
  decorators: [
    (Story) => <div style={{contain: "layout", position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}><Story /></div>
  ]
} satisfies Meta<typeof MaiDrawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>Lorem ipsum dolor sit amet</>,
    label: "test",
    open: true,
  },
};
