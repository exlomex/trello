import { classNames } from '@/shared/lib/classNames';
import { ReactElement } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Card } from '@/entities/Card';
import { CardsTypes } from '@/features/BoardCards';
import { Button } from '@/shared/ui/Button';
import { ColumnTitle } from '../ColumnTitle/ColumnTitle';
import cls from './ColumnLayout.module.scss';

export type ColumnType = 'view' | 'delete';
interface ColumnProps {
    className?: string;
    type?: ColumnType;
    children?: ReactElement;
    columnTitle: string;
    cardsData: CardsTypes[];
}

export const ColumnLayout = (props: ColumnProps) => {
    const { className, children, type, columnTitle, cardsData } = props;
    return (
        <div className={classNames(cls.Column, {}, [className])}>
            <HStack justify={'between'}>
                <ColumnTitle title={columnTitle} />
                <p>...</p>
            </HStack>

            {cardsData &&
                cardsData.map((card) => (
                    <Card key={card.id} cardDescription={card.card_text} />
                ))}

            <Button fullWidth={true}>Добавить карточку</Button>
        </div>
    );
};
