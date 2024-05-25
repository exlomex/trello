import { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { ColumnLayout } from '@/entities/Column';
import { moveColumn } from '@/entities/Column/lib/moveColumn';
import { useDispatch } from 'react-redux';
import { BoardCardsTypes } from '@/widgets/BoardCards';
import { useUpdateColumns } from '@/entities/Column/api/updateColumnsApi';
import { classNames } from '@/shared/lib/classNames/classNames';

interface DraggableColumnProps {
    column: BoardCardsTypes;
    index: number;
    columns: BoardCardsTypes[];
    className?: string;
}
export const DraggableColumn = ({
    column,
    index,
    columns,
    className,
}: DraggableColumnProps) => {
    const ref = useRef(null);
    const dispatch = useDispatch();
    const [updateColumns] = useUpdateColumns();

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
            moveColumn(dragIndex, hoverIndex, columns, dispatch);
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
                className={classNames('', {}, [className])}
            />
        </div>
    );
};
