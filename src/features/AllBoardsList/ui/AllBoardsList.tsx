import { classNames } from '@/shared/lib/classNames';
import { FC } from 'react';
import { useAllBords } from '@/features/AllBoardsList/api/AllBoardsApi';
import { Counter } from '@/entities/Counter';
import { BoardName } from '@/entities/BoardName';
import { d } from '@pmmmwh/react-refresh-webpack-plugin/types/options';
import cls from './AllBoardsList.module.scss';
import { AllBoards } from '../model/types/AllBoards';

interface AllBoardsListProps {
    className?: string;
}

export const AllBoardsList: FC = ({ className }: AllBoardsListProps) => {
    const { data: boards, isLoading } = useAllBords(null);
    return (
        <div className={classNames(cls.AllBoardsList, {}, [className])}>
            <h2 className={cls.AllBoardsTitle}>Все доски</h2>

            {boards &&
                boards.map((board) => (
                    <BoardName key={board.id}>{board.board_title}</BoardName>
                ))}
        </div>
    );
};
