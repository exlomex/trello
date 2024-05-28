import { classNames } from '@/shared/lib/classNames/classNames';
import { ChangeEvent, FC, useCallback, useState } from 'react';
import { Modal } from '@/shared/ui/Modal';
import { DropDown } from '@/shared/ui/popups';
import { Button } from '@/shared/ui/Button';
import { IconLayout } from '@/shared/layouts/IconLayout';
import DeleteIcon from '@/shared/assets/delete.svg';
import cls from './BoardsList.module.scss';

interface BoardsListProps {
    className?: string;
}

export const BoardsList = ({ className }: BoardsListProps) => (
    <div className={classNames(cls.BoardsList, {}, [className])}></div>
);
