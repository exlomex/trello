import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './BoardName.module.scss';

interface BoardNameProps {
    className?: string;
    boardName: string;
    boardColor?: string;
    onClick?: () => void;
}

export const BoardName = (props: BoardNameProps) => {
    const { className, boardColor = '#868686', boardName } = props;
    return (
        <div
            className={classNames(cls.BoardName, {}, [className])}
            onClick={props.onClick}
        >
            <div
                className={cls.boardBox}
                style={{ backgroundColor: boardColor }}
            />
            <p className={cls.boardText}>{boardName}</p>
        </div>
    );
};
