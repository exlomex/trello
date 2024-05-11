import { classNames } from '@/shared/lib/classNames';
import { memo, useState } from 'react';
import SettingSvg from '@/shared/assets/settings.svg';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button/Button';
import HideSvg from '@/shared/assets/hide.svg';
import { AllBoardsList } from '@/features/AllBoardsList/ui/AllBoardsList';
import { AddNewCard } from '@/features/AddNewCard/ui/AddNewCard';
import cls from './AsideMenu.module.scss';

interface AsideMenuProps {
    className?: string;
}

export const AsideMenu = memo(({ className }: AsideMenuProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const toggleCollapsed = () => {
        setCollapsed((prev) => !prev);
        console.log('toggle collapsed to: ', !collapsed);
    };

    const collapsedMods = {
        [cls.collapsedElem]: collapsed,
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
            <div className={cls.upperWrapper}>
                <div
                    className={classNames(cls.asideUpper, {}, [cls.hideButton])}
                >
                    <Input
                        placeholder={'Поиск'}
                        value={inputValue}
                        onChange={setInputValue}
                    />
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
                <Button
                    variant={'LeftAddonCreateButton'}
                    className={classNames(
                        '',
                        { [cls.collapsedElem]: collapsed },
                        [],
                    )}
                >
                    Создать доску
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
});
