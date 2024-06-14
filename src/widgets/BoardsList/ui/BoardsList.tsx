import { classNames } from '@/shared/lib/classNames/classNames';
import { ColumnLayout } from '@/entities/Column';
import { useParams, useRouter } from 'next/navigation';
import { useGetAllBoardColumns } from '@/widgets/BoardCards/api/BoardCardsApi';
import { useAllBords } from '@/features/AllBoardsList/api/AllBoardsApi';
import { HStack } from '@/shared/ui/Stack';
import { useCallback } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './BoardsList.module.scss';

interface BoardsListProps {
    className?: string;
}

export const BoardsList = ({ className }: BoardsListProps) => {
    const { data: boards, isLoading } = useAllBords(null, {
        // pollingInterval: 5000,
    });

    const router = useRouter();

    const handleRedirect = useCallback(
        (id: string) => () => {
            const originalPath = window.location.origin;
            router.push(`${originalPath}/BoardPage/${id}`);
        },
        [router],
    );

    if (isLoading) {
        return (
            <HStack
                className={classNames(cls.BoardsList, {}, [className])}
                gap={'16'}
            >
                <Skeleton
                    width={260}
                    border={8}
                    height={108}
                    marginBottom={30}
                    className={cls.boardNamePaddings}
                />
                <Skeleton
                    width={260}
                    border={8}
                    height={108}
                    marginBottom={30}
                    className={cls.boardNamePaddings}
                />
                <Skeleton
                    width={260}
                    border={8}
                    height={108}
                    marginBottom={30}
                    className={cls.boardNamePaddings}
                />
            </HStack>
        );
    }

    return (
        <HStack
            className={classNames(cls.BoardsList, {}, [className])}
            gap={'16'}
        >
            {boards &&
                boards.map((board) => (
                    <ColumnLayout
                        key={board.id}
                        type={'delete'}
                        columnTitle={board.board_title}
                        boardId={+board.id}
                        className={cls.columnLayout}
                        onClick={handleRedirect(board.id)}
                    ></ColumnLayout>
                ))}
        </HStack>
    );
};
