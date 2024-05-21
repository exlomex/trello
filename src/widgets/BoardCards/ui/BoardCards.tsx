import { ColumnLayout } from '@/entities/Column';
import { HStack } from '@/shared/ui/Stack';
import { useParams } from 'next/navigation';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AddNewCard } from '@/features/AddNewCard/ui/AddNewCard';
import { AddNewColumn } from '@/features/AddNewColumn';
import { useCallback, useEffect, useState, useRef } from 'react';
import {
    BoardColumnsActions,
    selectColumns,
} from '@/widgets/BoardCards/model/slice/BoardColumnsCards';
import { useDispatch, useSelector } from 'react-redux';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useCreateNewCard } from '@/features/AddNewCard/api/AddNewCardApi';
import { useUpdateCards } from '@/entities/Card/api/updateCardsApi';
import { CardsTypes } from '@/widgets/BoardCards';
import { useUpdateColumns } from '@/entities/Column/api/updateColumnsApi';
import { BoardColumnsType } from '@/features/AddNewColumn/model/types/BoardColumnsType';
import cls from './BoardCards.module.scss';
import { useGetAllBoardColumns } from '../api/BoardCardsApi';

interface BoardCardsProps {
    className?: string;
}

const Column = ({ column, index, moveColumn, columns, updateColumns }: any) => {
    const ref = useRef(null);
    const [, drop] = useDrop({
        accept: 'COLUMN',
        hover(item: any) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            if (dragIndex === hoverIndex) {
                return;
            }
            moveColumn(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'COLUMN',
        item: { type: 'COLUMN', id: column.id, index },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end() {
            updateColumns(columns);
        },
    });

    drag(drop(ref));

    return (
        <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <ColumnLayout
                columnTitle={column.column_title}
                cardsData={column.cards}
                columnId={column.id}
                index={index}
            />
        </div>
    );
};

export const BoardCards = (props: BoardCardsProps) => {
    const params = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const { className } = props;
    const { data, isLoading } = useGetAllBoardColumns({ id: params.id });
    const [updateCards] = useUpdateCards();
    const [updateColumns] = useUpdateColumns();

    const [timerButton, setTimerButton] = useState(false);
    // const prevCardsRef = useRef<any>([]);

    useEffect(() => {
        if (data) {
            dispatch(BoardColumnsActions.setColumns(data));
            // prevCardsRef.current = data;
        }
    }, [data, dispatch]);

    const globalColumns = useSelector(selectColumns);

    useEffect(() => {
        let timeoutId: any;
        if (!isLoading) {
            timeoutId = setTimeout(() => {
                setTimerButton(true);
            }, 0);
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [globalColumns, isLoading]);

    const handleDragEnd = (result: any) => {
        console.log(result);
        const { source, destination, draggableId } = result;
        if (!destination) return;

        const sourceColumnIndex = parseInt(source.droppableId, 10);
        const destinationColumnIndex = parseInt(destination.droppableId, 10);

        let SourceMoveColumn = null;
        let DestinationMoveColumn = null;
        let SourceMovedId = 0;
        let DestinationMovedId = 0;
        for (let i = 0; i <= globalColumns.length - 1; i++) {
            if (globalColumns[i].id === sourceColumnIndex) {
                SourceMoveColumn = globalColumns[i];
                SourceMovedId = i;
            }
        }
        if (sourceColumnIndex === destinationColumnIndex) {
            const newCards = Array.from(SourceMoveColumn.cards);
            const [movedCard] = newCards.splice(source.index, 1);
            newCards.splice(destination.index, 0, movedCard);
            const newColumns = Array.from(globalColumns);
            newColumns[SourceMovedId] = {
                ...SourceMoveColumn,
                cards: newCards,
            };
            dispatch(BoardColumnsActions.setColumns(newColumns));
            updateCards(newColumns as CardsTypes[]);
        } else {
            for (let i = 0; i <= globalColumns.length - 1; i++) {
                if (globalColumns[i].id === destinationColumnIndex) {
                    DestinationMoveColumn = globalColumns[i];
                    DestinationMovedId = i;
                }
            }

            const sourceCards = Array.from(SourceMoveColumn.cards);
            const destinationCards = Array.from(DestinationMoveColumn.cards);
            const [movedCard] = sourceCards.splice(source.index, 1);
            // TODO Изменить
            const updatedMovedCard = {
                ...(movedCard as []),
                columnId: +destination.droppableId,
            };
            console.log(
                destination.droppableId,
                typeof destination.droppableId,
            );
            console.log(updatedMovedCard);

            destinationCards.splice(destination.index, 0, updatedMovedCard);
            const newColumns = Array.from(globalColumns);
            console.log(newColumns[SourceMovedId]);
            newColumns[SourceMovedId] = {
                ...SourceMoveColumn,
                cards: sourceCards,
            };
            newColumns[DestinationMovedId] = {
                ...DestinationMoveColumn,
                cards: destinationCards,
            };
            console.log(newColumns);
            dispatch(BoardColumnsActions.setColumns(newColumns));
            updateCards(newColumns as CardsTypes[]);
        }
    };

    const moveColumn = (dragIndex: any, hoverIndex: any) => {
        const newColumns = Array.from(globalColumns);
        const [movedColumn] = newColumns.splice(dragIndex, 1);
        newColumns.splice(hoverIndex, 0, movedColumn);
        dispatch(BoardColumnsActions.setColumns(newColumns));
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable
                    droppableId="board"
                    type="COLUMN"
                    direction="horizontal"
                >
                    {(provided) => (
                        <HStack
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            gap={'24'}
                            wrap={'nowrap'}
                            align={'start'}
                        >
                            {isLoading && (
                                <>
                                    <Skeleton
                                        width={260}
                                        border={8}
                                        height={200}
                                        marginBottom={30}
                                    />
                                    <Skeleton
                                        width={260}
                                        border={8}
                                        height={120}
                                        marginBottom={25}
                                    />
                                    <Skeleton
                                        width={260}
                                        border={8}
                                        height={50}
                                        marginBottom={25}
                                    />
                                </>
                            )}

                            {Boolean(globalColumns.length) && (
                                <>
                                    {globalColumns.map(
                                        (column: any, index: any) => (
                                            <Column
                                                key={column.id}
                                                column={column}
                                                index={index}
                                                moveColumn={moveColumn}
                                                columns={globalColumns}
                                                updateColumns={updateColumns}
                                            />
                                        ),
                                    )}
                                </>
                            )}

                            {timerButton && (
                                <AddNewColumn boardId={params.id} />
                            )}
                            {provided.placeholder}
                        </HStack>
                    )}
                </Droppable>
            </DragDropContext>
        </DndProvider>
    );
};
