import { classNames } from '@/shared/lib/classNames';
import cls from './BoardCards.module.scss';

interface AsideMenuProps {
    className?: string;
}

export const BoardCards = ({ className }: AsideMenuProps) => (
    <div className={classNames(cls.AsideMenu, {}, [className])}>
        <h1>boards cards</h1>
    </div>
);
