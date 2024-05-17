import { createSlice } from '@reduxjs/toolkit';

// Создаем начальное состояние
const initialState = {
    columns: [],
};

// Создаем слайс
const BoardColumnsCards = createSlice({
    name: 'boardColumns',
    initialState,
    reducers: {
        // Экшен для установки состояния
        setColumns(state, action) {
            state.columns = action.payload;
        },
    },
});

// Экспортируем экшены
export const { actions: BoardColumnsActions } = BoardColumnsCards;

// Создаем селекторы
export const selectColumns = (state: any) => state.boardColumns.columns;

// Экспортируем редюсер
export const { reducer: BoardColumnsReducer } = BoardColumnsCards;
