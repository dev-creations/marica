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
  args: {
    disabled: false,
    variant: "primary",
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

export const WithCustomCSS: Story = {
  args: {
    children: "Custom CSS Class",
    className: "lorem"
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    expect(button.classList.contains("lorem") && button.classList.contains("mai-button"))
      .toBeTruthy();
  }
}

export const Success: Story = {
  args: {
    children: "Success",
    variant: "success"
  },
  play: Primary.play
};

export const Info: Story = {
  args: {
    children: "Info",
    variant: "info"
  },
  play: Primary.play
};

export const Warning: Story = {
  args: {
    children: "Warning",
    variant: "warning"
  },
  play: Primary.play
};

export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "danger"
  },
  play: Primary.play
};

export const Inactive: Story = {
  args: {
    children: "Inactive",
    disabled: true
  }
};
