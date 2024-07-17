import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { AddNewCard } from './AddNewCard';

const meta = {
    title: 'features/AddNewCard',
    component: AddNewCard,
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
} satisfies Meta<typeof AddNewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const addNewCard: Story = {
    args: { columnId: 1, className: 'fixedWidth' },
};
