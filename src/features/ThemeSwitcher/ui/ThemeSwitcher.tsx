import { classNames } from '@/shared/lib/classNames';
import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;

    const { theme, toggleTheme } = useTheme();

    const [enabled, setEnabled] = useState(theme === 'dark');

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <p className={cls.firstLabel}>светлая</p>
            <p className={cls.lastLabel}>темная</p>
            <span aria-hidden="true" className={cls.switchButton}></span>
        </Switch>
    );
};
