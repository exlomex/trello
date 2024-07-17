import type { Meta, StoryObj } from '@storybook/react';
import SettingSvg from '@/shared/assets/settings.svg';
import cls from '@/features/ThemePopover/ui/ThemePopover.module.scss';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { Button } from '@/shared/ui/Button';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultSkeleton: Story = {
    args: {
        width: '300px',
        height: '40px',
        border: '20px',
    },
};
