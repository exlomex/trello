import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import '@/app/styles/storybookIndex.scss';
import { Card } from './Card';

const meta = {
    title: 'entities/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    // args: { onClick: fn() },
    // decorators: [
    //     (Story) => (
    //         <StoreProvider initialState={{}}>
    //             <Story />
    //         </StoreProvider>
    //     ),
    // ],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const card: Story = {
    args: {
        cardId: 1,
        cardDescription: 'TestCard',
        className: 'fixedWidth',
    },
};
