import { classNames } from '@/shared/lib/classNames';
import { FC } from 'react';
import SettingSvg from '@/shared/assets/settings.svg';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button/Button';
import cls from './AsideMenu.module.scss';

interface AsideMenuProps {
    className?: string;
}

export const AsideMenu: FC = ({ className }: AsideMenuProps) => (
    <aside className={classNames(cls.AsideMenu, {}, [className])}>
        <div>
            <Input placeholder={'Поиск'} />
        </div>
        <IconLayout
            Svg={SettingSvg}
            clickable={true}
            onClick={() => {
                console.log(123);
            }}
        />
        <Button disabled={true}>13</Button>
    </aside>
);
