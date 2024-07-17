import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SettingSvg from '@/shared/assets/settings.svg';
import cls from '@/features/ThemePopover/ui/ThemePopover.module.scss';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import { Popover } from './Popover';

const meta = {
    title: 'shared/Popover',
    component: Popover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightPopover: Story = {
    args: {
        trigger: <IconLayout Svg={SettingSvg} className={cls.settingButton} />,
        children: <div>popover</div>,
        className: '',
    },
};

export const DarkPopover: Story = {
    args: {
        trigger: <IconLayout Svg={SettingSvg} className={cls.settingButton} />,
        children: <div>popover</div>,
        storybookClassName: 'dark',
    },
};
