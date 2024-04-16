import { classNames } from '@/shared/lib/classNames';
import { FC } from 'react';
import { IconLayout } from '@/shared/layouts/IconLayout/IconLayout';
import { Input } from '@/shared/ui/Input/Input';
import { SettingIcon } from '@/shared/ui/icons/SettingIcon';
import cls from './AsideMenu.module.scss';

interface AsideMenuProps {
    className?: string;
}

export const AsideMenu: FC = ({ className }: AsideMenuProps) => (
    <aside className={classNames(cls.AsideMenu, {}, [className])}>
        <div>
            <Input placeholder={'Поиск'} />
            <div>скрыть</div>
        </div>
        <SettingIcon />
    </aside>
);
