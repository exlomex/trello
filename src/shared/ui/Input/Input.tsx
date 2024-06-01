import React, { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'maxLength'
>;

interface InputProps extends HtmlInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    maxLength?: number;
}

export const Input = forwardRef(
    (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const {
            className,
            placeholder,
            value,
            onChange,
            maxLength = 40,
        } = props;

        function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
            onChange?.(e.target.value);
        }
        return (
            <input
                maxLength={maxLength}
                ref={ref}
                className={classNames(cls.Input, {}, [className])}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
            />
        );
    },
);
