import { classNames } from '@/shared/lib/classNames';
import { FC } from 'react';
import { IconLayout } from '@/shared/layouts/IconLayout/IconLayout';
import { Input } from '@/shared/ui/Input/Input';
import SettingSvg from '@/shared/assets/settings.svg';
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
        <IconLayout
            Svg={SettingSvg}
            clickable={true}
            onClick={() => {
                console.log(123);
            }}
        />
    </aside>
);
