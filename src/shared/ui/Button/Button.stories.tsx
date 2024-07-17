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
export const DefaultButton: Story = {
    args: {
        children: 'DefaultButton',
    },
};

export const IconButton: Story = {
    args: {
        children: <HideIcon />,
        variant: 'IconButton',
        borderRadius: '12',
    },
};

export const LeftAddonCreateButton: Story = {
    args: {
        children: 'LeftAddonCreateButton',
        variant: 'LeftAddonCreateButton',
    },
};

export const LeftAddonAddButton: Story = {
    args: {
        children: 'LeftAddonAddButton',
        variant: 'LeftAddonAddButton',
    },
};

export const LeftAddonPopoverButton: Story = {
    args: {
        children: 'LeftAddonPopoverButton',
        variant: 'LeftAddonPopoverButton',
    },
};

export const DeleteButton: Story = {
    args: {
        children: 'DeleteButton',
        variant: 'DeleteButton',
    },
};
