import '@/styles/globals.css';

import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        options: {
            storySort: {
                order: ['HOME', 'Components', 'Theme', '*'],
            },
        },
        docs: {
            toc: true,
        },
    },
};

export default preview;
