import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { BoardName } from './BoardName';

const meta = {
    title: 'entities/BoardName',
    component: BoardName,
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
} satisfies Meta<typeof BoardName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const boardName: Story = {
    args: { boardName: 'TestName', boardColor: '#bb2a5b' },
};
