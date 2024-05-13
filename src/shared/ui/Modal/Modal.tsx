import { classNames } from '@/shared/lib/classNames/classNames';
import { ReactNode, useCallback, useEffect } from 'react';
import { Portal } from '@/shared/ui/Portal';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import cls from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    isPortal?: boolean;
}

export const Modal = (props: ModalProps) => {
    const { className, children, isOpen, onClose, isPortal = true } = props;
    const mods: Record<string, boolean | undefined> = {
        [cls.opened]: isOpen,
    };

    const closeHandler = () => {
        if (onClose) {
            onClose();
        }
    };

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                if (onClose) {
                    onClose();
                }
            }
        },
        [onClose],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const { theme } = useTheme();

    return (
        <Portal isPortal={isPortal}>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.content}>{children}</div>
                <div className={cls.overlay} onClick={closeHandler} />
            </div>
        </Portal>
    );
};
