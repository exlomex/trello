import { classNames } from '@/shared/lib/classNames';
import { ChangeEvent, memo, ReactNode, SyntheticEvent } from 'react';
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { Button } from '@/shared/ui/Button';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import cls from './DropDown.module.scss';
import '../../styles/teststyles.css';

type Align = 'start' | 'end';
type Placement = 'top' | 'right' | 'bottom' | 'left';

export type AnchorProps = `${Placement}` | `${Placement} ${Align}`;

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: (e: SyntheticEvent<HTMLDivElement>) => void;
}

interface DropDownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    anchor?: AnchorProps;
}

export const DropDown = memo((props: DropDownProps) => {
    const { className, anchor = 'bottom end', trigger, items } = props;

    const { theme } = useTheme();

    return (
        <Menu as={'div'} className={classNames(cls.DropDown, {}, [className])}>
            <MenuButton as={'button'} className={cls.button}>
                {trigger}
            </MenuButton>

            <Transition
                enter="transition-enter"
                enterFrom="transition-enter-from"
                enterTo="transition-enter-to"
                leave="transition-leave"
                leaveFrom="transition-leave-from"
                leaveTo="transition-leave-to"
            >
                <MenuItems
                    anchor={anchor}
                    className={classNames(cls.menuWrapper, {}, [theme])}
                >
                    <div className={cls.menuHeader}>Параметры</div>
                    {items.map((item, index) => (
                        <MenuItem key={index} as={'div'} onClick={item.onClick}>
                            {item.content}
                        </MenuItem>
                    ))}
                </MenuItems>
            </Transition>
        </Menu>
    );
});