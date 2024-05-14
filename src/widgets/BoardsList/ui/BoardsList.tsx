import { classNames } from '@/shared/lib/classNames/classNames';
import { FC } from 'react';
import cls from './BoardsList.module.scss';

interface BoardsListProps {
    className?: string;
}

export const BoardsList: FC = ({ className }: BoardsListProps) => (
    <div className={classNames(cls.BoardsList, {}, [className])}></div>
);
