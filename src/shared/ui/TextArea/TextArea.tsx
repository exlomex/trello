import React, { ForwardedRef, forwardRef, TextareaHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './TextArea.module.scss';

type HtmlTextAreaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange'
>;

interface TextAreaProps extends HtmlTextAreaProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const TextArea = forwardRef(
    (props: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
        const { className, placeholder, value, onChange } = props;

        function onChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
            onChange?.(e.target.value);
        }
        return (
            <textarea
                ref={ref}
                className={classNames(cls.TextArea, {}, [className])}
                placeholder={placeholder}
                value={value}
                onChange={onChangeHandler}
                draggable
                onDragStart={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
                style={props.style}
                onClick={props.onClick}
            />
        );
    },
);
