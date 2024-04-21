// .storybook/preview.tsx
import '../src/app/styles/index.scss';
import type { Preview } from '@storybook/react';
import { Inter } from 'next/font/google';
import React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';

const inter = Inter({
    weight: ['300', '400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

let preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <div className={inter.className}>
                <Story />
            </div>
        ),
        withThemeByClassName({
            themes: {
                light: 'light',
                dark: 'dark',
            },
            defaultTheme: 'dark',
        }),
    ],
};

export default preview;
