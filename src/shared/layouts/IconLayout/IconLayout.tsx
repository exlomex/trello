import React, { memo, SVGProps } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './IconLayout.module.scss';

interface IIcon extends SVGProps<SVGAElement> {
    className?: string;
    Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IIcon {
    clickable?: false;
}

interface ClickableIconProps extends IIcon {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;
export const IconLayout = memo((props: IconProps) => {
    const {
        className,
        height = '20px',
        width = '20px',
        clickable,
        onClick = undefined,
        Svg,
    } = props;

    const layoutIcon = (
        <Svg
            className={classNames(cls.Icon, {}, [])}
            height={height}
            width={width}
        />
    );

    if (clickable) {
        return (
            <button
                className={classNames(cls.button, {}, [className])}
                onClick={props.onClick}
            >
                {layoutIcon}
            </button>
        );
    }

    return layoutIcon;
});
