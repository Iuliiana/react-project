import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options;

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = buildCssLoader(isDev);

    const svgLoader = buildSvgLoader();

    const fileLoader = {
        // test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const fontsLoader = {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
            filename: 'fonts/[name][ext]',
        },
    };

    const babelLoader = buildBabelLoader(options);

    return [
        fontsLoader,
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        cssLoader,
    ];
};
