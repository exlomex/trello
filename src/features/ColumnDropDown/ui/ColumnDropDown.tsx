import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { IconLayout } from '@/shared/layouts/IconLayout';
import DeleteIcon from '@/shared/assets/delete.svg';
import { DropDown } from '@/shared/ui/popups';
import PointsSettingIcon from '@/shared/assets/pointsSettings.svg';
import { SyntheticEvent } from 'react';
import { useDeleteColumn } from '@/features/ColumnDropDown/api/DeleteColumnApi';
import cls from './ColumnDropDown.module.scss';

interface ColumnDropDownProps {
    className?: string;
    columnId: number | string;
}

export const ColumnDropDown = (props: ColumnDropDownProps) => {
    const { className, columnId } = props;

    const [deleteColumn, { error }] = useDeleteColumn();

    const deleteHandler = (e: SyntheticEvent<HTMLDivElement>) => {
        e.preventDefault();
        deleteColumn(columnId);
    };

    const items = [
        {
            content: (
                <Button fullWidth={true} variant={'LeftAddonPopoverButton'}>
                    <IconLayout Svg={DeleteIcon} width={14} height={15} />
                    Удалить колонку
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
            className={classNames(cls.ColumnDropDown, {}, [className])}
        ></DropDown>
    );
};
