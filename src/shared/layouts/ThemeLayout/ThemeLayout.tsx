import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';

interface ThemeLayoutProps {
    children: React.ReactNode;
}

export const ThemeLayout = memo(({ children }: ThemeLayoutProps) => {
    const { theme } = useTheme();
    return <div className={classNames('wrapper', {}, [theme])}>{children}</div>;
});
