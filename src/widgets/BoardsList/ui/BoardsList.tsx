import { classNames } from '@/shared/lib/classNames/classNames';
import { FC, useCallback, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import cls from './BoardsList.module.scss';

interface BoardsListProps {
    className?: string;
}

export const BoardsList: FC = ({ className }: BoardsListProps) => (
    <div className={classNames(cls.BoardsList, {}, [className])}></div>
);
