'use client';

import './styles/index.scss';
import React from 'react';
import { useRouter } from 'next/navigation';
import ThemeProvider from '@/app/providers/ui/ThemeProvider';
import { ThemeLayout } from '@/shared/layouts/ThemeLayout/ThemeLayout';
import { Inter } from 'next/font/google';

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
                <ThemeProvider>
                    <ThemeLayout>{children}</ThemeLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}
