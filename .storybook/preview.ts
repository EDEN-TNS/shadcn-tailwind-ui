import '@/styles/globals.css';

import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: {
                order: ['HOME', 'Components', 'Theme', 'ETC', '*'],
            },
        },
        docs: {
            toc: true,
        },
    },
};

export default preview;
