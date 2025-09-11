import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconButton } from './IconButton';

const meta = {
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    icon: 'home',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    icon: 'home',
  },
};

export const Test: Story = {
  args: {
    variant: 'primary',
    icon: "home"
  }
};