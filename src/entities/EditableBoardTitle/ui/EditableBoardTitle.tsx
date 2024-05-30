import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { TextArea } from '@/shared/ui/TextArea';
import { Input } from '@/shared/ui/Input';
import { useOutsideDivHandler } from '@/shared/lib/hooks';
import { useParams } from 'next/navigation';
import { useEditBoardTitle } from '@/entities/EditableBoardTitle/api/editBoardTitleApi';
import cls from './EditableBoardTitle.module.scss';

interface EditableBoardTitleProps {
    className?: string;
    boardName: string;
    boardColor?: string;
}

export const EditableBoardTitle = (props: EditableBoardTitleProps) => {
    const { className, boardColor = '#868686', boardName } = props;
    const [editable, setEditable] = useState(false);
    const [titleValue, setTitleValue] = useState(boardName);
    const InputRef = useRef<HTMLInputElement>(null);

    const handleEditable = useCallback(() => {
        setEditable(true);
    }, []);

    const params = useParams<{ id: string }>();

    useEffect(() => {
        if (editable && InputRef.current) {
            InputRef.current.focus();
            InputRef.current.select();
        }
    }, [editable]);

    const [editBoardName] = useEditBoardTitle();

    useOutsideDivHandler(
        'board_title',
        InputRef,
        titleValue,
        +params.id,
        setEditable,
        editable,
        editBoardName,
    );

    return (
        <div
            className={classNames(cls.EditableBoardTitle, {}, [className])}
            onClick={handleEditable}
        >
            <div
                className={cls.boardBox}
                style={{ backgroundColor: boardColor }}
            />
            <p
                className={classNames(
                    cls.boardText,
                    { [cls.editable]: editable },
                    [],
                )}
            >
                {titleValue}
            </p>
            <Input
                className={classNames(
                    cls.titleTextArea,
                    { [cls.editable]: editable },
                    [],
                )}
                value={titleValue}
                onChange={setTitleValue}
                ref={InputRef}
                maxLength={20}
            />
        </div>
    );
};
