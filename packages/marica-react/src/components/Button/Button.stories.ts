import type { Meta, StoryObj } from '@storybook/react';

import { MaiButton } from '.';

const meta = {
  title: 'Atoms/MaiButton',
  component: MaiButton,
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fCkLO9XCKffMYLP0fxTB6w/marica.io?node-id=204%3A2"
    }
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