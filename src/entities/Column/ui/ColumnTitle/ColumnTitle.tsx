import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ColumnTitle.module.scss';

interface ColumnTitleProps {
    className?: string;
    title?: string;
}

export const ColumnTitle = (props: ColumnTitleProps) => {
    const { className, title = 'Название не задано' } = props;
    return (
        <p className={classNames(cls.ColumnTitle, {}, [className])}>{title}</p>
    );
};
