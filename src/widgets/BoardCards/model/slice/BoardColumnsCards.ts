import { createSlice } from '@reduxjs/toolkit';
import { BoardColumnsCardsSchema } from '@/widgets/BoardCards/model/types/BoardColumnsCardsSchema';
import { StateSchema } from '@/app/providers/StoreProvider';

// Создаем начальное состояние
const initialState: BoardColumnsCardsSchema = {
    columns: [],
};

const BoardColumnsCards = createSlice({
    name: 'boardColumns',
    initialState,
    reducers: {
        setColumns(state, action) {
            state.columns = action.payload;
        },
    },
});

export const { actions: BoardColumnsActions } = BoardColumnsCards;

export const selectColumns = (state: StateSchema) => state.boardColumns.columns;

export const { reducer: BoardColumnsReducer } = BoardColumnsCards;
