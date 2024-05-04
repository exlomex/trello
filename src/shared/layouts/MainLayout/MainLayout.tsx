import { classNames } from '@/shared/lib/classNames';
import { ReactElement } from 'react';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    asideMenu: ReactElement;
    content: ReactElement;
}

export const MainLayout = (props: MainLayoutProps) => {
    const { className, asideMenu, content } = props;
    return (
        <div className={classNames(cls.MainLayout, {}, [className])}>
            <div className={classNames(cls.asideMenu)}>{asideMenu}</div>
            <div className={classNames(cls.content)}>{content}</div>
        </div>
    );
};
