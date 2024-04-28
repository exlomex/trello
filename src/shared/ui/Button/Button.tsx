import { classNames } from '@/shared/lib/classNames';
import {
    ButtonHTMLAttributes,
    ForwardedRef,
    forwardRef,
    ReactNode,
} from 'react';
import cls from './Button.module.scss';

export type ButtonVariant = 'addButton' | 'deleteButton' | 'hideButton';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    // содержимое
    children?: ReactNode;
    // вариант
    variant?: ButtonVariant;
    // аддоны (svg and etc..)
    addonLeft?: ReactNode;
    addonRight?: ReactNode;
    // disabled
    disabled?: boolean;
    // full width (100%)
    fullWidth?: boolean;
}

export const Button = forwardRef(
    (props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
        const {
            className,
            children,
            variant = 'addButton',
            addonRight,
            addonLeft,
            disabled,
            fullWidth,
            ...otherProps
        } = props;

        const mods = {
            [cls.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
            [cls.disabled]: disabled,
            [cls.fullWidth]: fullWidth,
        };

        return (
            <button
                className={classNames(cls.Button, mods, [
                    className,
                    cls[variant],
                ])}
                ref={ref}
                disabled={disabled}
                onClick={props.onClick}
                {...otherProps}
            >
                <div className={cls.addonLeft}>{addonLeft}</div>
                {children}
                <div className={cls.addonLeft}>{addonLeft}</div>
            </button>
        );
    },
);
