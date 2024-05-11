import { ColumnLayout } from '@/entities/Column';
import { HStack } from '@/shared/ui/Stack';
import { useGetAllBoardColumns } from '@/features/BoardCards/api/BoardCardsApi';
import { Button } from '@/shared/ui/Button';
import { useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AddNewCard } from '@/features/AddNewCard/ui/AddNewCard';
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

            {columns &&
                columns.map((column) => (
                    <ColumnLayout
                        key={column.id}
                        columnTitle={column.column_title}
                        cardsData={column.cards}
                        columnId={column.id}
                    ></ColumnLayout>
                ))}
            <Button className={cls.BoardButton} variant={'LeftAddonAddButton'}>
                Добавить еще одну колонку
            </Button>
        </HStack>
    );
};
