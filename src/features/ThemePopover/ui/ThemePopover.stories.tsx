import type { Meta, StoryObj } from '@storybook/react';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import { ThemePopover } from './ThemePopover';

const meta = {
    title: 'features/ThemePopover',
    component: ThemePopover,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
    // args: { onClick: fn() },
} satisfies Meta<typeof ThemePopover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const columnDropDown: Story = {
    args: {},
};
