import { classNames } from '@/shared/lib/classNames/classNames';
import { useCallback, useEffect, useRef, useState } from 'react';
import { CardPopover } from '@/entities/Card/ui/CardPopover/CardPopover';
import { TextArea } from '@/shared/ui/TextArea';
import { useOutsideDivHandler } from '@/shared/lib/hooks';
import { useEditColumnTitle } from '@/entities/Column/api/editColumnTitleApi';
import { useEditCardTitle } from '@/entities/Card/api/editCardTitleApi';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    cardDescription: string;
    cardId: number;
}

export const Card = (props: CardProps) => {
    const { className, cardDescription, cardId } = props;

    const [editable, setEditable] = useState(false);
    const [titleValue, setTitleValue] = useState(cardDescription);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const heightRef = useRef<HTMLDivElement>(null);
    const [heightState, setHeightState] = useState(0);

    const handleEditable = useCallback(() => {
        setEditable(true);
    }, []);

    // TODO DEPRECATED
    useEffect(() => {
        if (heightRef.current) {
            const rects = heightRef.current.getClientRects();
            setHeightState(+rects[0].height.toFixed());
        }
    }, [heightState]);

    useEffect(() => {
        if (editable && textAreaRef.current) {
            textAreaRef.current.focus();
            textAreaRef.current.select();
        }
    }, [editable]);

    const [editCardTitle, { error }] = useEditCardTitle();

    useOutsideDivHandler(
        'card_text',
        textAreaRef,
        titleValue,
        cardId,
        setEditable,
        editable,
        editCardTitle,
    );

    return (
        <>
            <div
                className={classNames(cls.Card, { [cls.editable]: editable }, [
                    className,
                ])}
                onClick={handleEditable}
                ref={heightRef}
            >
                <p>{titleValue}</p>
                <CardPopover
                    className={cls.cardButton}
                    cardId={cardId}
                    cardText={cardDescription}
                />
            </div>
            <TextArea
                style={{ height: `100px` }}
                value={titleValue}
                onChange={setTitleValue}
                ref={textAreaRef}
                className={classNames(
                    cls.textarea,
                    { [cls.TextAreaEditable]: editable },
                    [],
                )}
            />
        </>
    );
};
