import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SettingSvg from '@/shared/assets/settings.svg';
import cls from '@/features/ThemePopover/ui/ThemePopover.module.scss';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import { Button } from '@/shared/ui/Button';
import DeleteIcon from '@/shared/assets/delete.svg';
import { SyntheticEvent } from 'react';
import { DropDown } from './DropDown';

const meta = {
    title: 'shared/DropDown',
    component: DropDown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    {
        content: (
            <Button fullWidth={true} variant={'LeftAddonPopoverButton'}>
                Example1
            </Button>
        ),
    },

    {
        content: (
            <Button fullWidth={true} variant={'LeftAddonPopoverButton'}>
                Example2
            </Button>
        ),
    },

    {
        content: (
            <Button fullWidth={true} variant={'LeftAddonPopoverButton'}>
                Example3
            </Button>
        ),
    },
];

export const defaultDropDown: Story = {
    args: {
        trigger: <IconLayout Svg={SettingSvg} className={cls.settingButton} />,
        items,
        storybookClassName: 'dark',
    },
};
