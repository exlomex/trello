import type { Meta, StoryObj } from '@storybook/react';
import { AddNewColumn } from './AddNewColumn';

const meta = {
    title: 'features/AddNewColumn',
    component: AddNewColumn,
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
} satisfies Meta<typeof AddNewColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const addNewColumn: Story = {
    args: { boardId: String(1) },
};
