module.exports = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock',
        'storybook-addon-themes',
    ],
    staticDirs: ['../../public'],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5',
    },
    env: (config) => ({
        ...config,
        __IS_DEV__: true,
        __API__: '',
    }),
};
