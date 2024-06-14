import { classNames } from '@/shared/lib/classNames/classNames';
import React, { ReactElement, useRef } from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/entities/Card';
import { AddNewCard } from '@/features/AddNewCard';
import { ColumnTitle } from '@/entities/Column';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { CardsTypes } from '@/widgets/BoardCards';
import { ColumnDropDown } from '@/features/ColumnDropDown';
import { Button } from '@/shared/ui/Button';
import { useDeleteBoard } from '@/entities/Column/api/deleteBoardApi';
import cls from './ColumnLayout.module.scss';

export type ColumnType = 'view' | 'delete';

interface ColumnProps {
    className?: string;
    type?: ColumnType;
    children?: ReactElement;
    columnTitle?: string;
    cardsData?: CardsTypes[];
    columnId?: number;
    boardId?: number;
    onClick?: () => void;
}

export const ColumnLayout = (props: ColumnProps) => {
    const {
        className,
        children,
        type,
        columnTitle,
        cardsData,
        columnId,
        boardId,
    } = props;

    const windowRef = useRef(null);

    const [deleleBoard] = useDeleteBoard();

    const handleDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (boardId) {
            deleleBoard({ id: boardId });
        }
    };

    if (type === 'delete') {
        return (
            <div
                className={classNames(cls.Column, {}, [className])}
                onClick={props.onClick}
            >
                <>
                    {columnTitle && (
                        <HStack justify={'between'} className={cls.upperLine}>
                            <ColumnTitle
                                TitleType={'boardTitle'}
                                title={columnTitle}
                                boardId={boardId}
                            />
                        </HStack>
                    )}
                    <Button
                        fullWidth
                        variant={'DeleteButton'}
                        onClick={handleDeleteButton}
                    >
                        Удалить
                    </Button>
                </>
            </div>
        );
    }

    return (
        <div
            ref={windowRef}
            className={classNames(cls.Column, {}, [className])}
        >
            {columnTitle && columnId && (
                <HStack justify={'between'} className={cls.upperLine}>
                    <ColumnTitle title={columnTitle} columnId={columnId} />
                    <ColumnDropDown columnId={columnId} />
                </HStack>
            )}

            <Droppable droppableId={String(columnId)} type="CARD">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={cls.CardsContainer}
                    >
                        {cardsData &&
                            cardsData.map((card, cardIndex) => (
                                <Draggable
                                    key={card.id}
                                    draggableId={String(card.id)}
                                    index={cardIndex}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            ref={provided.innerRef}
                                            id={'test-2'}
                                            className={classNames(
                                                cls.Card,
                                                {
                                                    [cls.isDragging]:
                                                        snapshot.isDragging,
                                                },
                                                [className],
                                            )}
                                        >
                                            <Card
                                                cardDescription={card.card_text}
                                                cardId={+card.id}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            {columnId && <AddNewCard columnId={columnId} ref={windowRef} />}

            {children}
        </div>
    );
};
