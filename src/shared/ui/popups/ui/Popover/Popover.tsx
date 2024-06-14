import { classNames } from '@/shared/lib/classNames';
import {
    Popover as HPopover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from '@headlessui/react';
import { ReactNode } from 'react';
import cls from './Popover.module.scss';
import { AnchorProps, DropdownItem } from '../DropDown/DropDown';
import '../../styles/teststyles.css';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    anchor?: AnchorProps;
    triggerClassname?: string;
    children?: ReactNode;
}

export const Popover = (props: PopoverProps) => {
    const {
        className,
        trigger,
        triggerClassname,
        anchor = 'top',
        children,
    } = props;

    const { theme } = useTheme();

    return (
        <HPopover className={classNames(cls.Popover, {}, [className])}>
            <PopoverButton
                as={'button'}
                className={classNames(cls.button, {}, [triggerClassname])}
            >
                {trigger}
            </PopoverButton>

            <Transition
                enter="transition-enter"
                enterFrom="transition-enter-from"
                enterTo="transition-enter-to"
                leave="transition-leave"
                leaveFrom="transition-leave-from"
                leaveTo="transition-leave-to"
                as={'div'}
            >
                <PopoverPanel
                    anchor={anchor}
                    className={classNames(cls.popoverPanel, {}, [theme])}
                >
                    {children}
                </PopoverPanel>
            </Transition>
        </HPopover>
    );
};
