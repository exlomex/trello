import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode } from 'react';
import cls from './BoardName.module.scss';

interface BoardNameProps {
    className?: string;
    children: ReactNode;
    boardColor?: string;
    onClick?: () => void;
}

export const BoardName = (props: BoardNameProps) => {
    const { className, boardColor = '#868686', children } = props;
    return (
        <div
            className={classNames(cls.BoardName, {}, [className])}
            onClick={props.onClick}
        >
            <div
                className={cls.boardBox}
                style={{ backgroundColor: boardColor }}
            />
            <p className={cls.boardText}>{children}</p>
        </div>
    );
};
