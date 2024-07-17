import type { Meta, StoryObj } from '@storybook/react';
import { ColumnDropDown } from './ColumnDropDown';

const meta = {
    title: 'features/ColumnDropDown',
    component: ColumnDropDown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
} satisfies Meta<typeof ColumnDropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const columnDropDown: Story = {
    args: {
        columnId: 1,
    },
};
