import React, { InputHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HtmlInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

interface InputProps extends HtmlInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
    const { className, placeholder, value, onChange } = props;

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        onChange?.(e.target.value);
    }
    return (
        <input
            className={classNames(cls.Input, {}, [className])}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
        />
    );
});
