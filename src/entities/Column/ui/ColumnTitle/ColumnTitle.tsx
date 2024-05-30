import { classNames } from '@/shared/lib/classNames/classNames';
import { TextArea } from '@/shared/ui/TextArea';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useOutsideDivHandler } from '@/shared/lib/hooks/useOutsideTextAreaHandler/useOutsideTextAreaHandler';
import { useEditColumnTitle } from '@/entities/Column/api/editColumnTitleApi';
import cls from './ColumnTitle.module.scss';

interface ColumnTitleProps {
    className?: string;
    title?: string;
    columnId: number;
}

export const ColumnTitle = (props: ColumnTitleProps) => {
    const { className, title = 'Название не задано', columnId } = props;
    const [editable, setEditable] = useState(false);
    const [titleValue, setTitleValue] = useState(title);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (editable && textAreaRef.current) {
            textAreaRef.current.focus();
            textAreaRef.current.select();
        }
    }, [editable]);

    const [editColumnTitle, { error }] = useEditColumnTitle();

    useOutsideDivHandler(
        'column_title',
        textAreaRef,
        titleValue,
        columnId,
        setEditable,
        editable,
        editColumnTitle,
    );

    const handleEditable = useCallback(() => {
        setEditable(true);
    }, []);

    return (
        <div className={cls.titleWrapper}>
            <p
                className={classNames(
                    cls.ColumnTitle,
                    { [cls.editable]: editable },
                    [className],
                )}
                onClick={handleEditable}
            >
                {titleValue}
            </p>
            <TextArea
                className={classNames(
                    cls.titleTextArea,
                    { [cls.editable]: editable },
                    [],
                )}
                value={titleValue}
                onChange={setTitleValue}
                ref={textAreaRef}
            />
        </div>
    );
};
