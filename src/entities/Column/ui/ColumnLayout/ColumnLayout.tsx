import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactElement, useRef } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Card } from '@/entities/Card';
import { AddNewCard } from '@/features/AddNewCard';
import { ColumnTitle } from '@/entities/Column';
import { BoardCardsTypes, CardsTypes } from '@/widgets/BoardCards';
import { useDrag, useDrop } from 'react-dnd';
import { useUpdateColumns } from '@/entities/Column/api/updateColumnsApi';
import { useCreateNewCard } from '@/features/AddNewCard/api/AddNewCardApi';
import { BoardColumnsType } from '@/features/AddNewColumn/model/types/BoardColumnsType';
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
    moveCard: (id: number, hoverIndex: number) => void;
    columnState: any;
}

export interface XYCoord {
    x: number;
    y: number;
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
        moveCard,
        columnState,
    } = props;

    const formRef = useRef<HTMLDivElement>(null);

    const [updateColumns, { isLoading }] = useUpdateColumns();

    const [{ handlerId, isDropping }, drop] = useDrop({
        accept: 'column',
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
                isDropping: monitor.isOver(),
            };
        },
        hover(item: any, monitor) {
            if (!formRef.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            // // Determine rectangle on screen
            // const hoverBoundingRect = formRef.current?.getBoundingClientRect();
            //
            // // Get vertical middle
            // const hoverMiddleY =
            //     (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            //
            // // Determine mouse position
            // const clientOffset = monitor.getClientOffset();
            //
            // // Get pixels to the top
            // const hoverClientY =
            //     (clientOffset as XYCoord).y - hoverBoundingRect.top;

            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%

            // // Dragging downwards
            // if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            //     return;
            // }
            //
            // // Dragging upwards
            // if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            //     return;
            // }

            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);

            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'column',
        item: () => ({ columnId, index }),
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging(),
        }),
        end() {
            // console.log(JSON.stringify(columnState));
            updateColumns(columnState as BoardColumnsType[]);
        },
    });

    drop(drag(formRef));

    return (
        <div
            className={classNames(
                cls.Column,
                { [cls.isDragging]: isDragging, [cls.isDropping]: isDropping },
                [className],
            )}
            ref={formRef}
        >
            {columnTitle && (
                <HStack justify={'between'}>
                    <ColumnTitle title={columnTitle} />
                    <p>...</p>
                </HStack>
            )}

            {cardsData &&
                cardsData.map((card) => (
                    <Card key={card.id} cardDescription={card.card_text} />
                ))}

            {columnId && <AddNewCard ref={formRef} columnId={columnId} />}

            {children}
        </div>
    );
};
