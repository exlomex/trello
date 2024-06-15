import { classNames } from '@/shared/lib/classNames';
import { IconLayout } from '@/shared/layouts/IconLayout';
import SettingSvg from '@/shared/assets/settings.svg';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Popover } from '@/shared/ui/popups';
import cls from './ThemePopover.module.scss';

interface ThemePopoverProps {
    className?: string;
}

export const ThemePopover = (props: ThemePopoverProps) => {
    const { className } = props;
    return (
        <Popover
            className={classNames(cls.ThemePopover, {}, [className])}
            anchor={'top start'}
            trigger={
                <IconLayout Svg={SettingSvg} className={cls.settingButton} />
            }
        >
            <p>Тема</p>
            <ThemeSwitcher />
        </Popover>
    );
};
