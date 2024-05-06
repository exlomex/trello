import { classNames } from '@/shared/lib/classNames';
import cls from './Card.module.scss';

interface CardProps {
    className?: string;
    cardDescription: string;
}

export const Card = (props: CardProps) => {
    const { className, cardDescription } = props;
    return (
        <div className={classNames(cls.Card, {}, [className])}>
            <p>{cardDescription}</p>
        </div>
    );
};
