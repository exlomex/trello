import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HideIcon } from '@/shared/ui/Icons/HideIcon';
import { Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const addButton: Story = {
    args: {
        children: 'добавить доску',
    },
};

export const deleteButton: Story = {
    args: {
        children: 'удалить доску',
        variant: 'deleteButton',
    },
};

export const hideButton: Story = {
    args: {
        children: <HideIcon />,
        variant: 'hideButton',
    },
};
