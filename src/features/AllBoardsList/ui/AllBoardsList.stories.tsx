import type { Meta, StoryObj } from '@storybook/react';
import { AllBoards } from '@/features/AllBoardsList/model/types/AllBoards';
import { AllBoardsList } from './AllBoardsList';

const customData: AllBoards[] = [
    {
        id: String(1),
        board_title: 'testTitle1',
        board_color: '#5fa0d5',
    },
    {
        id: String(2),
        board_title: 'testTitle2',
        board_color: 'rgba(95,90,218,0.25)',
    },
    {
        id: String(2),
        board_title: 'testTitle3',
        board_color: 'rgba(76,213,127,0.7)',
    },
];

const meta = {
    title: 'features/AllBoardsList',
    component: AllBoardsList,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // @ts-ignore
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof AllBoardsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const allBoardsList: Story = {
    args: { customData },
};
