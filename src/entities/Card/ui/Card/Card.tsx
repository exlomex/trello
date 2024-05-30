import { classNames } from '@/shared/lib/classNames/classNames';
import { useRef } from 'react';
import { CardPopover } from '@/entities/Card/ui/CardPopover/CardPopover';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    cardDescription: string;
    cardId: number;
}

export const Card = (props: CardProps) => {
    const { className, cardDescription, cardId } = props;
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div className={classNames(cls.Card, {}, [className])} ref={cardRef}>
            <p>{cardDescription}</p>
            <CardPopover className={cls.cardButton} cardId={cardId} />
        </div>
    );
};
