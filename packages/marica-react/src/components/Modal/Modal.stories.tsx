import type { Meta, StoryObj } from '@storybook/react';

import { MaiModal } from '.';

const meta = {
  title: 'Atoms/MaiModal',
  component: MaiModal,
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'mai-modal-close' }
  },
  decorators: [
    (Story) => <div style={{contain: "layout", position: "absolute", top: 0, bottom: 0, left: 0, right: 0}}><Story /></div>
  ]
} satisfies Meta<typeof MaiModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>Lorem ipsum dolor sit amet</>,
    label: "test",
    open: true,
  },
};
