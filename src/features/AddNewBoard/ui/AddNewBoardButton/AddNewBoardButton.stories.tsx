import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { AddNewBoardButton } from './addNewBoardButton';

const meta = {
    title: 'features/AddNewBoardButton',
    component: AddNewBoardButton,
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
} satisfies Meta<typeof AddNewBoardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const addNewBoard: Story = {
    args: {},
};
