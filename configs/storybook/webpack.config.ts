import path from 'path';
import webpack from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { BuildPath } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPath = {
        entry: '',
        html: '',
        build: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
        favicon: path.resolve(
            __dirname,
            '..',
            '..',
            'src',
            'shared',
            'assets',
            'icons',
            'favicon.svg',
        ),
    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    config.resolve!.alias = { ...config.resolve!.alias, '@': paths.src };

    config!.module!.rules = config!.module!.rules!.map(
        // @ts-ignore
        (rule: webpack.RuleSetRule) => {
            if (/svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
            return rule;
        },
    );
    config!.module!.rules.push(buildSvgLoader());
    // true - storybook используется только на этапе разработки
    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://test.test'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );
    return config;
};
