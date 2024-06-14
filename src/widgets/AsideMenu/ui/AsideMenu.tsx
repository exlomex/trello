import { classNames } from '@/shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import SettingSvg from '@/shared/assets/settings.svg';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button/Button';
import HideSvg from '@/shared/assets/hide.svg';
import { AllBoardsList } from '@/features/AllBoardsList/ui/AllBoardsList';
import { AddNewCard } from '@/features/AddNewCard/ui/AddNewCard';
import { AddNewBoardButton } from '@/features/AddNewBoard';
import { useAllBords } from '@/features/AllBoardsList/api/AllBoardsApi';
import { BoardsSearch } from '@/features/BoardsSearch';
import { Popover } from '@/shared/ui/popups';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import cls from './AsideMenu.module.scss';

interface AsideMenuProps {
    className?: string;
}

export const AsideMenu = memo(({ className }: AsideMenuProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const { theme, toggleTheme } = useTheme();

    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev);
        console.log('toggle collapsed to: ', !collapsed);
    };

    const collapsedMods = {
        [cls.collapsedElem]: collapsed,
    };

    const { data: boards } = useAllBords(null);
    return (
        <aside
            className={classNames(
                cls.AsideMenu,
                { [cls.collapsed]: collapsed },
                [className],
            )}
            data-testid={'asideMenu'}
        >
            <div className={cls.upperWrapper}>
                <div
                    className={classNames(cls.asideUpper, {}, [cls.hideButton])}
                >
                    <BoardsSearch boards={boards} />
                    <Button
                        variant={'IconButton'}
                        borderRadius={'12'}
                        size={'l'}
                        onClick={toggleCollapsed}
                    >
                        <IconLayout
                            Svg={HideSvg}
                            width={'11px'}
                            height={'19px'}
                        />
                    </Button>
                </div>

                <AllBoardsList className={classNames('', collapsedMods, [])} />
                <AddNewBoardButton
                    className={classNames(
                        '',
                        { [cls.collapsedElem]: collapsed },
                        [],
                    )}
                />
            </div>

            {/* <IconLayout */}
            {/*    Svg={SettingSvg} */}
            {/*    clickable={true} */}
            {/*    onClick={() => {}} */}
            {/*    className={cls.settingButton} */}
            {/* ></IconLayout> */}
            <Popover
                anchor={'top start'}
                trigger={
                    <IconLayout
                        Svg={SettingSvg}
                        className={cls.settingButton}
                    />
                }
            >
                <button onClick={toggleTheme}>сменить тему</button>
            </Popover>
        </aside>
    );
});
