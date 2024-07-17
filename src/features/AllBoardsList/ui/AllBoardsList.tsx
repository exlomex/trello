import { classNames } from '@/shared/lib/classNames/classNames';
import { useCallback } from 'react';
import { useAllBords } from '@/features/AllBoardsList/api/AllBoardsApi';
import { BoardName } from '@/entities/BoardName';
import { Skeleton } from '@/shared/ui/Skeleton';
import { useRouter } from 'next/navigation';
import { AllBoards } from '@/features/AllBoardsList/model/types/AllBoards';
import cls from './AllBoardsList.module.scss';

interface AllBoardsListProps {
    className?: string;
    customData?: AllBoards[];
}

export const AllBoardsList = ({
    className,
    customData,
}: AllBoardsListProps) => {
    let { data: boards } = useAllBords(null, {
        pollingInterval: 5000,
    });

    const { isLoading } = useAllBords(null, {
        // pollingInterval: 5000,
    });
    const router = useRouter();

    const onChangePage = useCallback(
        (id: string) => {
            const originalPath = window.location.origin;
            router.push(`${originalPath}/BoardPage/${id}`);
        },
        [router],
    );

    if (customData) boards = customData;

    return (
        <div className={classNames(cls.AllBoardsList, {}, [className])}>
            <h2 className={cls.AllBoardsTitle}>Все доски</h2>

            {!customData && isLoading && (
                <>
                    <Skeleton
                        width={150}
                        border={8}
                        height={30}
                        marginBottom={30}
                    />
                    <Skeleton
                        width={170}
                        border={8}
                        height={30}
                        marginBottom={25}
                    />
                    <Skeleton
                        width={100}
                        border={8}
                        height={30}
                        marginBottom={25}
                    />
                    <Skeleton
                        width={200}
                        border={8}
                        height={30}
                        marginBottom={25}
                    />
                </>
            )}

            {boards &&
                boards.map((board) => (
                    <BoardName
                        key={board.id}
                        onClick={() => onChangePage(board.id)}
                        boardName={board.board_title}
                        boardColor={board.board_color}
                    />
                ))}
        </div>
    );
};
