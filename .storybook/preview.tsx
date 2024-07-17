// .storybook/preview.tsx
import '../src/app/styles/index.scss';
import '../src/app/styles/storybookIndex.scss';
import type { Preview, StoryFn } from '@storybook/react';
import { Inter } from 'next/font/google';
import React from 'react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { StateSchema, StoreProvider } from '../src/app/providers/StoreProvider';
import { PartialStoryFn } from '@storybook/types';

const inter = Inter({
    weight: ['300', '400', '500', '700'],
    style: ['normal'],
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

let preview: Preview = {
    parameters: {
        nextjs: {
            appDirectory: true,
        },
        // actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <StoreProvider initialState={{}}>
                <div className={inter.className}>
                    <Story />
                </div>
            </StoreProvider>
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
