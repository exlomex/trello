import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { AsideMenu } from './AsideMenu';

const meta = {
    title: 'widgets/AsideMenu',
    component: AsideMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
    decorators: [
        (Story) => (
            <StoreProvider initialState={{}}>
                <Story />
            </StoreProvider>
        ),
    ],
} satisfies Meta<typeof AsideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const asideMenu: Story = {
    args: { className: '31' },
};
