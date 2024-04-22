import { classNames } from '@/shared/lib/classNames';
import { FC, useState } from 'react';
import SettingSvg from '@/shared/assets/settings.svg';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button/Button';
import HideSvg from '@/shared/assets/hide.svg';
import cls from './AsideMenu.module.scss';

interface AsideMenuProps {
    className?: string;
}

export const AsideMenu: FC = ({ className }: AsideMenuProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev);
        console.log('toggle collapsed to: ', !collapsed);
    };
    return (
        <aside
            className={classNames(
                cls.AsideMenu,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            data-testid={'asideMenu'}
        >
            <div className={classNames(cls.asideUpper, {}, [])}>
                <Input placeholder={'Поиск'} />
                <Button variant={'hideButton'} onClick={toggleCollapsed}>
                    <IconLayout Svg={HideSvg} width={'11px'} height={'19px'} />
                </Button>
            </div>
            <IconLayout
                Svg={SettingSvg}
                clickable={true}
                onClick={() => {}}
                className={cls.settingButton}
            ></IconLayout>
        </aside>
    );
};
