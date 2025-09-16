import type { Meta, StoryObj } from '@storybook/react-vite';

import { Surface } from './Surface';

const meta = {
  title: "Surfaces/Surface",
  component: Surface,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Surface>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "label"
  }
};