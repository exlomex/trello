import { classNames } from '@/shared/lib/classNames/classNames';
import { TextArea } from '@/shared/ui/TextArea';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useOutsideDivHandler } from '@/shared/lib/hooks/useOutsideTextAreaHandler/useOutsideTextAreaHandler';
import { useEditColumnTitle } from '@/entities/Column/api/editColumnTitleApi';
import { useEditBoardTitle } from '@/entities/EditableBoardTitle/api/editBoardTitleApi';
import cls from './ColumnTitle.module.scss';

interface ColumnTitleProps {
    className?: string;
    title?: string;
    columnId?: number;
    boardId?: number;
    TitleType?: 'boardTitle' | 'columnTitle';
}

export const ColumnTitle = (props: ColumnTitleProps) => {
    const {
        className,
        title = 'Название не задано',
        columnId,
        TitleType = 'columnTitle',
        boardId,
    } = props;
    const [editable, setEditable] = useState(false);
    const [titleValue, setTitleValue] = useState(title);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (editable && textAreaRef.current) {
            textAreaRef.current.focus();
            textAreaRef.current.select();
        }
    }, [editable]);

    const [editColumnTitle] = useEditColumnTitle();
    const [editBoardTitle] = useEditBoardTitle();

    useOutsideDivHandler(
        TitleType === 'columnTitle' ? 'column_title' : 'board_title',
        textAreaRef,
        titleValue,
        TitleType === 'columnTitle' ? columnId : boardId,
        setEditable,
        editable,
        TitleType === 'columnTitle' ? editColumnTitle : editBoardTitle,
    );

    const handleEditable = useCallback(
        (e: React.MouseEvent<HTMLParagraphElement>) => {
            e.stopPropagation();
            setEditable(true);
        },
        [],
    );

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
