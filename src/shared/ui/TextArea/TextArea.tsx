import React, { memo, TextareaHTMLAttributes } from 'react';
import { classNames } from '@/shared/lib/classNames';
import cls from './TextArea.module.scss';

type HtmlTextAreaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'value' | 'onChange'
>;

export type InputVariant = 'DefaultInput' | 'addFormInput';
interface TextAreaProps extends HtmlTextAreaProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export const TextArea = memo((props: TextAreaProps) => {
    const { className, placeholder, value, onChange } = props;

    function onChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
        onChange?.(e.target.value);
    }
    return (
        <textarea
            className={classNames(cls.TextArea, {}, [className])}
            placeholder={placeholder}
            value={value}
            onChange={onChangeHandler}
        />
    );
});
