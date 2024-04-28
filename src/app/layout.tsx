'use client';

import './styles/index.scss';
import React from 'react';
import { useRouter } from 'next/navigation';
import ThemeProvider from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import { ThemeLayout } from '@/shared/layouts/ThemeLayout/ThemeLayout';
import { Inter } from 'next/font/google';
import { StoreProvider } from '@/app/providers/StoreProvider';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const redirect = useRouter();

    return (
        <html lang="en">
            <body className={`app ${inter.className}`}>
                <StoreProvider>
                    <ThemeProvider>
                        <ThemeLayout>{children}</ThemeLayout>
                    </ThemeProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
