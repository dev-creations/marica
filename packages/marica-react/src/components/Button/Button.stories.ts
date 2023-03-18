import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { MaiButton } from '.';

const meta = {
  title: 'Atoms/MaiButton',
  component: MaiButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/fCkLO9XCKffMYLP0fxTB6w/marica.io?node-id=204%3A2",
    }
  },
} satisfies Meta<typeof MaiButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary"
  },
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    userEvent.click(button);
    expect(args['onClick']).toHaveBeenCalled();
  }
};

export const Inactive: Story = {
  args: {
    children: "Inactive",
    disabled: true
  }
};
