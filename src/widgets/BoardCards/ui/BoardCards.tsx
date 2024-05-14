import { ColumnLayout } from '@/entities/Column';
import { HStack } from '@/shared/ui/Stack';
import { useParams } from 'next/navigation';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AddNewCard } from '@/features/AddNewCard/ui/AddNewCard';
import { AddNewColumn } from '@/features/AddNewColumn';
import { useCallback, useEffect, useState } from 'react';
import { BoardCardsTypes } from '@/widgets/BoardCards';
import { useGetAllBoardColumns } from '../api/BoardCardsApi';
import cls from './BoardCards.module.scss';

interface BoardCardsProps {
    className?: string;
}

export const BoardCards = (props: BoardCardsProps) => {
    const params = useParams<{ id: string }>();
    const { className } = props;
    const { data, isLoading } = useGetAllBoardColumns({
        id: params.id,
    });

    const [timerButton, setTimerButton] = useState(false);

    const [columns, setColumns] = useState<BoardCardsTypes[]>([]);
    useEffect(() => {
        if (!isLoading && data) {
            setColumns(data);
        }
    }, [data, isLoading]);

    useEffect(() => {
        let timeoutId: any; // Объявляем переменную timeoutId в области видимости useEffect
        if (!isLoading) {
            timeoutId = setTimeout(() => {
                setTimerButton(true);
            }, 0);
        }
        return () => {
            if (timeoutId) clearTimeout(timeoutId); // Очищаем таймер только если он был установлен
        };
    }, [isLoading]);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
        setColumns((prevCards) => {
            const newCards = [...prevCards]; // Создаем копию массива
            const draggedCard = newCards[dragIndex]; // Сохраняем перетаскиваемый элемент
            newCards.splice(dragIndex, 1); // Удаляем перетаскиваемый элемент из его текущей позиции
            newCards.splice(hoverIndex, 0, draggedCard); // Вставляем перетаскиваемый элемент в новую позицию
            return newCards; // Возвращаем новый массив карточек
        });
    }, []);

    return (
        <HStack gap={'24'} wrap={'nowrap'} align={'start'}>
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

            {Boolean(columns.length) && (
                <>
                    {columns.map((column, index) => (
                        <ColumnLayout
                            key={column.id}
                            columnTitle={column.column_title}
                            cardsData={column.cards}
                            columnId={column.id}
                            index={index}
                            moveCard={moveCard}
                            columnState={columns}
                        />
                    ))}
                </>
            )}

            {timerButton && <AddNewColumn boardId={params.id} />}
        </HStack>
    );
};
