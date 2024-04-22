import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '@/components/common/TextInput';

const meta = {
  title: 'Input/Text',
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // args: { onChange: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Typing: Story = {
  args: {
    value: '작성중...',
    width: 'w-[200px]',
    padding: 'p-10',
    border: 'border-2',
    borderColor: 'border-red-500',
  },
};
