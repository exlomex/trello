import { FC, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

export const Input = memo((props: InputProps) => {
    const { className, placeholder, ...otherProps } = props;
    return (
        <input
            className={cls.Input}
            placeholder={placeholder}
            {...otherProps}
        />
    );
});
