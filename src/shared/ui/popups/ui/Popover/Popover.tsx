import { classNames } from '@/shared/lib/classNames';
import {
    Popover as HPopover,
    PopoverButton,
    PopoverPanel,
    Transition,
} from '@headlessui/react';
import { ReactNode, useEffect, useRef } from 'react';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import cls from './Popover.module.scss';
import { AnchorProps } from '../DropDown/DropDown';
import '../../styles/teststyles.css';

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

    const panelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (panelRef.current) {
            const panel = panelRef.current;
            panel.classList.remove('light', 'dark');
            panel.classList.add(theme);
        }
    }, [theme]);

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
            >
                <PopoverPanel
                    anchor={anchor}
                    ref={panelRef}
                    className={classNames(cls.popoverPanel, {}, [theme])}
                    as={'div'}
                >
                    {children}
                </PopoverPanel>
            </Transition>
        </HPopover>
    );
};
