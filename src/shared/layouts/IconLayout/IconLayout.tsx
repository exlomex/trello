import React, { FC, memo, ReactNode, SVGProps } from 'react';
import cls from './IconLayout.module.scss';

interface IIcon extends SVGProps<SVGAElement> {
    className?: string;
    children: ReactNode;
}

interface NonClickableIconProps extends IIcon {
    clickable?: false;
}

interface ClickableIconProps extends IIcon {
    clickable: true;
    onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;
export const IconLayout: FC<IconProps> = memo((props) => {
    const {
        className,
        height = '20px',
        width = '20px',
        children,
        clickable,
        onClick = undefined,
        viewBox,
    } = props;

    const layoutIcon = (
        <svg
            stroke="#5C5C5C"
            fill="#5C5C5C"
            className={className}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            width={width}
        >
            {children}
        </svg>
    );

    if (clickable) {
        return (
            <button className={cls.button} onClick={props.onClick}>
                {layoutIcon}
            </button>
        );
    }

    return layoutIcon;
});
