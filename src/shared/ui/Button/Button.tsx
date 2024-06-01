import { classNames } from '@/shared/lib/classNames/classNames';
import React, {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';
import plusSvg from '@/shared/assets/plus.svg';
import createSvg from '@/shared/assets/create.svg';
import { IconLayout } from '@/shared/layouts/IconLayout';
import cls from './Button.module.scss';

export type ButtonVariant =
    | 'DefaultButton'
    | 'IconButton'
    | 'LeftAddonCreateButton'
    | 'LeftAddonAddButton'
    | 'LeftAddonPopoverButton'
    | 'DeleteButton';

export type ButtonBorderRadius = '6' | '12' | '16' | '24';
export type ButtonSize = 'm' | 'l';

const ButtonBorderClasses: Record<ButtonBorderRadius, string> = {
    6: cls.border6,
    12: cls.border12,
    16: cls.border16,
    24: cls.border24,
};
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    // содержимое
    children?: ReactNode;
    // вариант кнопки
    variant?: ButtonVariant;
    // размер кнопки
    size?: ButtonSize;
    // disabled flag
    disabled?: boolean;
    // full width (100%)
    fullWidth?: boolean;
    // borderRadius
    borderRadius?: ButtonBorderRadius;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'DefaultButton',
            disabled,
            fullWidth,
            borderRadius = '6',
            size = 'm',
            ...otherProps
        } = props;

        const mods = {
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
        };

        const classes = [
            className,
            cls[variant],
            ButtonBorderClasses[borderRadius],
            cls[size],
        ];

        return (
            <button
                className={classNames(cls.Button, mods, classes)}
                ref={ref}
                disabled={disabled}
                onClick={props.onClick}
                {...otherProps}
            >
                {/* Addons */}
                {variant === 'LeftAddonAddButton' && (
                    <IconLayout
                        Svg={plusSvg}
                        width={9}
                        height={9}
                        fill={'#940808'}
                    />
                )}
                {variant === 'LeftAddonCreateButton' && (
                    <IconLayout
                        Svg={createSvg}
                        width={33}
                        height={33}
                        fill={'#940808'}
                    />
                )}

                {children}
            </button>
        );
    },
);
