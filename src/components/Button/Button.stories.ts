import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { Button } from './Button.tsx';

const meta = {
  title: "Controls/Button",
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    onClick: fn()
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
    disabled: true
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

export const Test: Story = {
  args: {
    variant: 'primary',
    label: "Button"
  }
};
