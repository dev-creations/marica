import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { MaiSwitch } from '.';

const meta = {
  title: 'Atoms/MaiSwitch',
  component: MaiSwitch,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'change' }
  },
} satisfies Meta<typeof MaiSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "MaiSwitch",
  },
  play: ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const maiSwitch = canvas.getByTitle('MaiSwitch');

    userEvent.click(maiSwitch);
    expect(maiSwitch.querySelector("input")!.checked).toBeTruthy();
    
    userEvent.click(maiSwitch);
    expect(maiSwitch.querySelector("input")!.checked).toBeFalsy();

    expect(args['onChange']).toBeCalledTimes(2);
  }
};