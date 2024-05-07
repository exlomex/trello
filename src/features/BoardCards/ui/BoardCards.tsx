import { ColumnLayout } from '@/entities/Column';
import { HStack } from '@/shared/ui/Stack';
import { useGetAllBoardColumns } from '@/features/BoardCards/api/BoardCardsApi';
import { Button } from '@/shared/ui/Button';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import cls from './BoardCards.module.scss';

interface BoardCardsProps {
    className?: string;
}

export const BoardCards = (props: BoardCardsProps) => {
    const params = useParams<{ id: string }>();

    const { className } = props;
    const { data: columns, isLoading } = useGetAllBoardColumns({
        id: params.id,
    });
    return (
        <HStack gap={'24'} wrap={'nowrap'} align={'start'}>
            {columns &&
                columns.map((column) => (
                    <ColumnLayout
                        key={column.id}
                        columnTitle={column.column_title}
                        cardsData={column.cards}
                    ></ColumnLayout>
                ))}
            <Button className={cls.BoardButton}>
                Добавить еще одну колонку
            </Button>
        </HStack>
    );
};
