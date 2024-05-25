import { BoardCardsTypes, BoardColumnsActions } from '@/widgets/BoardCards';
import { useDispatch } from 'react-redux';

export const moveColumn = (
    dragIndex: number,
    hoverIndex: number,
    globalColumns: BoardCardsTypes[],
    dispatch: ReturnType<typeof useDispatch>,
) => {
    const newColumns = Array.from(globalColumns);
    const [movedColumn] = newColumns.splice(dragIndex, 1);
    newColumns.splice(hoverIndex, 0, movedColumn);
    dispatch(BoardColumnsActions.setColumns(newColumns));
};
