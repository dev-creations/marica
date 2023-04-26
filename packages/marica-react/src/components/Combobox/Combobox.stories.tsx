import type { Meta, StoryObj } from '@storybook/react';

import { MaiCombobox } from '.';
import { MaiComboboxOption } from './Option';

const meta = {
  title: 'Atoms/MaiCombobox',
  component: MaiCombobox,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'change' },
  },
  args: { },
  parameters: { },
} satisfies Meta<typeof MaiCombobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: [
      <MaiComboboxOption>1</MaiComboboxOption>,
      <MaiComboboxOption>2</MaiComboboxOption>,
      <MaiComboboxOption>3</MaiComboboxOption>,
    ],
  },
};
