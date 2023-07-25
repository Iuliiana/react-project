import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';
import { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
    isTSX?: boolean
}

export const buildBabelLoader = ({ isDev, isTSX }: BuildBabelLoaderProps) => ({
    test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: [
                [
                    '@babel/plugin-transform-typescript',
                    {
                        isTSX,
                    },
                ],
                isTSX && !isDev && [
                    babelRemovePropsPlugin, {
                        props: ['data-testid'],
                    },
                ],
                '@babel/plugin-transform-runtime',
                isDev && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
        },
    },
});
