import {
    BoardCardsTypes,
    BoardColumnsActions,
    CardsTypes,
} from '@/widgets/BoardCards';
import { DropResult } from '@hello-pangea/dnd';
import { useUpdateCards } from '@/entities/Card/api/updateCardsApi';
import { MutationDefinition } from '@reduxjs/toolkit/query';
import { useDispatch } from 'react-redux';

export const handleDragEnd = (
    globalColumns: BoardCardsTypes[],
    dispatch: ReturnType<typeof useDispatch>,
    // TODO try to define type
    updateCards: any,
    result: DropResult,
) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumnIndex = parseInt(source.droppableId, 10);
    const destinationColumnIndex = parseInt(destination.droppableId, 10);

    let SourceMoveColumn: BoardCardsTypes = {} as BoardCardsTypes;
    let DestinationMoveColumn: BoardCardsTypes = {} as BoardCardsTypes;
    let SourceMovedId = 0;
    let DestinationMovedId = 0;
    for (let i = 0; i <= globalColumns.length - 1; i++) {
        if (+globalColumns[i].id === sourceColumnIndex) {
            SourceMoveColumn = globalColumns[i];
            SourceMovedId = i;
        }
    }
    if (sourceColumnIndex === destinationColumnIndex && SourceMoveColumn) {
        const newCards = Array.from(SourceMoveColumn.cards);
        const [movedCard] = newCards.splice(source.index, 1);
        newCards.splice(destination.index, 0, movedCard);
        const newColumns = Array.from(globalColumns);
        newColumns[SourceMovedId] = {
            ...SourceMoveColumn,
            cards: newCards,
        };
        dispatch(BoardColumnsActions.setColumns(newColumns));
        updateCards(newColumns as BoardCardsTypes[]);
    } else {
        for (let i = 0; i <= globalColumns.length - 1; i++) {
            if (+globalColumns[i].id === destinationColumnIndex) {
                DestinationMoveColumn = globalColumns[i];
                DestinationMovedId = i;
            }
        }

        const sourceCards = Array.from(SourceMoveColumn.cards);
        const destinationCards = Array.from(DestinationMoveColumn.cards);

        const [movedCard] = sourceCards.splice(source.index, 1);

        const updatedMovedCard = {
            ...movedCard,
            columnId: +destination.droppableId,
        };

        destinationCards.splice(destination.index, 0, updatedMovedCard);
        const newColumns = Array.from(globalColumns);
        newColumns[SourceMovedId] = {
            ...SourceMoveColumn,
            cards: sourceCards,
        };
        newColumns[DestinationMovedId] = {
            ...DestinationMoveColumn,
            cards: destinationCards,
        };
        dispatch(BoardColumnsActions.setColumns(newColumns));
        updateCards(newColumns as BoardCardsTypes[]);
    }
};
