'use client';

import React from 'react';
import { useTheme } from '@/app/providers/lib/useTheme';
import { classNames } from '@/shared/lib/classNames';

export default function Home() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div>
            <h1>cur theme = {theme}</h1>
            <button onClick={toggleTheme}>сменить</button>
        </div>
    );
}
