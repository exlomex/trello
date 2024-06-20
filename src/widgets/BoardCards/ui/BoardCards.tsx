import { DraggableColumn } from '@/entities/Column';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useParams } from 'next/navigation';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AddNewColumn } from '@/features/AddNewColumn';
import { useEffect, useState } from 'react';
import {
    BoardColumnsActions,
    selectColumns,
} from '@/widgets/BoardCards/model/slice/BoardColumnsCards';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, DropResult } from '@hello-pangea/dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useUpdateCards } from '@/entities/Card/api/updateCardsApi';
import { handleDragEnd } from '@/widgets/BoardCards/lib/CardDnd';
import { BoardCardsTypes } from '@/widgets/BoardCards';
import { EditableBoardTitle } from '@/entities/EditableBoardTitle';
import { useGetBoardInfo } from '../api/BoardInfoApi';
import { useGetAllBoardColumns } from '../api/BoardCardsApi';
import cls from './BoardCards.module.scss';

interface BoardCardsProps {
    className?: string;
}

export const BoardCards = (props: BoardCardsProps) => {
    const params = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const { className } = props;
    const { data, isLoading } = useGetAllBoardColumns({ id: params.id });
    const [updateCards] = useUpdateCards();

    const [timerButton, setTimerButton] = useState(false);

    useEffect(() => {
        if (data) {
            dispatch(BoardColumnsActions.setColumns(data));
        }
    }, [data, dispatch]);

    const globalColumns = useSelector(selectColumns);

    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        if (!isLoading) {
            timeoutId = setTimeout(() => {
                setTimerButton(true);
            }, 0);
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, [globalColumns, isLoading]);

    const onDragEndFunc = (result: DropResult) => {
        handleDragEnd(globalColumns, dispatch, updateCards, result);
    };

    const { data: boardData, isLoading: boardIsLoading } = useGetBoardInfo({
        id: params.id,
    });

    return (
        <VStack gap={'60'} wrap={'nowrap'}>
            <div className={cls.boardNameWrapper}>
                {boardIsLoading && (
                    <Skeleton
                        width={130}
                        border={8}
                        height={30}
                        marginBottom={30}
                        className={cls.boardNamePaddings}
                    />
                )}
                {boardData && (
                    <EditableBoardTitle
                        boardName={boardData.board_title}
                        className={cls.boardNamePaddings}
                        boardColor={boardData.board_color}
                    />
                )}
            </div>
            <DndProvider backend={HTML5Backend}>
                <DragDropContext onDragEnd={onDragEndFunc}>
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
                                className={cls.droppableDiv}
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

                                {Boolean(globalColumns.length) &&
                                    !isLoading && (
                                        <>
                                            {globalColumns.map(
                                                (
                                                    column: BoardCardsTypes,
                                                    index: number,
                                                ) => (
                                                    <DraggableColumn
                                                        key={column.id}
                                                        column={column}
                                                        index={index}
                                                        columns={globalColumns}
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
        </VStack>
    );
};
