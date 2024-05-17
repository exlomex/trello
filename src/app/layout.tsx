'use client';

import './styles/index.scss';
import React from 'react';
import { useRouter } from 'next/navigation';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import { ThemeLayout } from '@/shared/layouts/ThemeLayout/ThemeLayout';
import { Inter } from 'next/font/google';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-beautiful-dnd';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`app ${inter.className}`}>
                <StoreProvider>
                    <DndProvider backend={HTML5Backend}>
                        <ThemeProvider>
                            <ThemeLayout>{children}</ThemeLayout>
                        </ThemeProvider>
                    </DndProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
