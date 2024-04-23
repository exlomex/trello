import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
    isPortal: boolean;
}

export const Portal = (props: PortalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const { children, element = document.body, isPortal } = props;
    if (isPortal) {
        return createPortal(children, element);
    }
    return <>{children}</>;
};
