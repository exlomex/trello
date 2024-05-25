import { classNames } from '@/shared/lib/classNames/classNames';
import {
    forwardRef,
    ReactElement,
    Ref,
    useEffect,
    useRef,
    useState,
} from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Card } from '@/entities/Card';
import { AddNewCard } from '@/features/AddNewCard';
import { ColumnTitle } from '@/entities/Column';
import { useSelector } from 'react-redux';
import { selectColumns } from '@/widgets/BoardCards/model/slice/BoardColumnsCards';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { CardsTypes } from '@/widgets/BoardCards';
import cls from './ColumnLayout.module.scss';

export type ColumnType = 'view' | 'delete';

interface ColumnProps {
    className?: string;
    type?: ColumnType;
    children?: ReactElement;
    columnTitle?: string;
    cardsData?: CardsTypes[];
    columnId: string;
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

    const windowRef = useRef(null);

    return (
        <div
            ref={windowRef}
            className={classNames(cls.Column, {}, [className])}
        >
            {columnTitle && (
                <HStack justify={'between'} className={cls.upperLine}>
                    <ColumnTitle title={columnTitle} />
                    <p>...</p>
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

            {columnId && <AddNewCard columnId={columnId} ref={windowRef} />}

            {children}
        </div>
    );
};
