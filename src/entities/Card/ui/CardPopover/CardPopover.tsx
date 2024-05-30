import { classNames } from '@/shared/lib/classNames';
import { IconLayout } from '@/shared/layouts/IconLayout';
import DeleteIcon from '@/shared/assets/delete.svg';
import { SyntheticEvent } from 'react';
import { DropDown } from '@/shared/ui/popups';
import PointsSettingIcon from '@/shared/assets/pointsSettings.svg';
import { TextArea } from '@/shared/ui/TextArea';
import { Button } from '@/shared/ui/Button';
import PenIcon from '@/shared/assets/pen.svg';
import cls from './CardPopover.module.scss';
import { useDeleteCard } from '../../api/deleteCardApi';

interface CardPopoverProps {
    className?: string;
    cardId: number;
    cardText: string;
}

export const CardPopover = (props: CardPopoverProps) => {
    const { className, cardId, cardText } = props;

    const [deleteCard] = useDeleteCard();

    const deleteHandler = (e: SyntheticEvent<HTMLDivElement>) => {
        e.preventDefault();
        deleteCard(cardId);
    };

    const items = [
        {
            content: (
                <Button fullWidth={true} variant={'LeftAddonPopoverButton'}>
                    <IconLayout Svg={DeleteIcon} width={14} height={15} />
                    Удалить карточку
                </Button>
            ),
            onClick: (e: SyntheticEvent<HTMLDivElement>) => {
                deleteHandler(e);
            },
        },
    ];

    return (
        <DropDown
            trigger={
                <IconLayout Svg={PointsSettingIcon} width={14} height={3} />
            }
            items={items}
            className={classNames(cls.CardPopover, {}, [className])}
            triggerClassname={cls.popoverButton}
        ></DropDown>
    );
};
