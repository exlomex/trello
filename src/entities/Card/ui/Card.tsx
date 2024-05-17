import { classNames } from '@/shared/lib/classNames/classNames';
import { useRef } from 'react';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    cardDescription?: string;
    columnIndex?: string | number;
    cardIndex?: number;
}

export const Card = (props: CardProps) => {
    const { className, cardDescription } = props;
    const cardRef = useRef<HTMLDivElement>(null);

    return (
        <div className={classNames(cls.Card, {}, [className])} ref={cardRef}>
            {cardDescription && <p>{cardDescription}</p>}
        </div>
    );
};
