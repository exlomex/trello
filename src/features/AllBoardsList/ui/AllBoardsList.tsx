import { classNames } from '@/shared/lib/classNames';
import { FC } from 'react';
import { useAllBords } from '@/features/AllBoardsList/api/AllBoardsApi';
import { BoardName } from '@/entities/BoardName';
import { Skeleton } from '@/shared/ui/Skeleton';
import cls from './AllBoardsList.module.scss';

interface AllBoardsListProps {
    className?: string;
}

export const AllBoardsList = ({ className }: AllBoardsListProps) => {
    const { data: boards, isLoading } = useAllBords(null);
    return (
        <div className={classNames(cls.AllBoardsList, {}, [className])}>
            <h2 className={cls.AllBoardsTitle}>Все доски</h2>

            {isLoading && (
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
                    <BoardName key={board.id}>{board.board_title}</BoardName>
                ))}
        </div>
    );
};
