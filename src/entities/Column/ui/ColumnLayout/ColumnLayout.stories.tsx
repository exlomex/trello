import type { Meta, StoryObj } from '@storybook/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { fn } from '@storybook/test';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { DragDropContext } from '@hello-pangea/dnd';
import { CardsTypes } from '@/widgets/BoardCards';
import { str } from '@storybook/docs-tools';
import { ColumnLayout } from './ColumnLayout';

const cardsData: CardsTypes[] = [
    {
        id: String(1),
        card_text: 'test1',
        columnId: 1,
    },
    {
        id: String(2),
        card_text: 'test2',
        columnId: 1,
    },
    {
        id: String(3),
        card_text: 'test3',
        columnId: 1,
    },
];

const meta = {
    title: 'entities/ColumnLayout',
    component: ColumnLayout,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
    args: { onClick: fn() },
    decorators: [
        (Story) => (
            <StoreProvider initialState={{}}>
                <DndProvider backend={HTML5Backend}>
                    <DragDropContext onDragEnd={() => {}}>
                        <Story />
                    </DragDropContext>
                </DndProvider>
            </StoreProvider>
        ),
    ],
} satisfies Meta<typeof ColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const viewColumnLayout: Story = {
    args: {
        type: 'view',
        cardsData,
        columnTitle: 'testTitle',
        columnId: 1,
    },
};

export const deleteColumnLayout: Story = {
    args: {
        type: 'delete',
        columnTitle: 'testTitle',
        columnId: 1,
    },
};
