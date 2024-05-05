import { CSSProperties, memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string | number;
    marginBottom?: string | number;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, height = 20, width, border, marginBottom } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
        marginBottom,
    };

    return (
        <div
            className={classNames(cls.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
