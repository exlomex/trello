import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactElement, useEffect, useState } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Card } from '@/entities/Card';
import { AddNewCard } from '@/features/AddNewCard';
import { ColumnTitle } from '@/entities/Column';
import { useSelector } from 'react-redux';
import { selectColumns } from '@/widgets/BoardCards/model/slice/BoardColumnsCards';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { CardsTypes } from '@/widgets/BoardCards';
import cls from './ColumnLayout.module.scss';

export type ColumnType = 'view' | 'delete';

interface ColumnProps {
    className?: string;
    type?: ColumnType;
    children?: ReactElement;
    columnTitle?: string;
    cardsData?: CardsTypes[];
    columnId?: string;
    index: number;
}

export const ColumnLayout = (props: ColumnProps) => {
    const {
        className,
        children,
        type,
        columnTitle,
        cardsData,
        columnId,
        index,
    } = props;

    const columnsFromRedux = useSelector(selectColumns);
    const [columns, setColumns] = useState(columnsFromRedux);

    useEffect(() => {
        setColumns(columnsFromRedux);
    }, [columnsFromRedux]);

    const getItemStyle = (isDragging: any, draggableStyle: any) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: 'none',

        // change background colour if dragging
        background: isDragging ? 'lightgreen' : 'none',

        // styles we need to apply on draggables
        ...draggableStyle,
    });

    return (
        <div className={classNames(cls.Column, {}, [className])}>
            {columnTitle && (
                <HStack justify={'between'}>
                    <ColumnTitle title={columnTitle} />
                    <p>...</p>
                </HStack>
            )}

            <Droppable droppableId={String(index)} type="CARD">
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
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
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
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
                                                columnIndex={index}
                                                cardIndex={cardIndex}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>

            {columnId && <AddNewCard columnId={columnId} />}

            {children}
        </div>
    );
};
