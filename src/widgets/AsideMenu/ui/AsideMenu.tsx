import { classNames } from '@/shared/lib/classNames';
import { FC } from 'react';
import SettingSvg from '@/shared/assets/settings.svg';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button/Button';
import HideSvg from '@/shared/assets/hide.svg';
import { BoardName } from '@/entities/ui/BoardName';
import cls from './AsideMenu.module.scss';

interface AsideMenuProps {
    className?: string;
}

export const AsideMenu: FC = ({ className }: AsideMenuProps) => (
    <aside className={classNames(cls.AsideMenu, {}, [className])}>
        <div className={classNames(cls.asideUpper, {}, [])}>
            <Input placeholder={'Поиск'} />
            <Button variant={'hideButton'}>
                <IconLayout Svg={HideSvg} width={'11px'} height={'19px'} />
            </Button>
        </div>
        <IconLayout
            Svg={SettingSvg}
            clickable={true}
            onClick={() => {
                console.log(123);
            }}
        />

        <BoardName
            onClick={() => {
                console.log(13);
            }}
        >
            Первая доска
        </BoardName>
        <BoardName>ЕщваыавапыыфываптЕщваыавапыыфывапт</BoardName>
        <BoardName>ваыьщдз</BoardName>
    </aside>
);
