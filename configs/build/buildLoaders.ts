import webpack from 'webpack';
import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { BuildOptions } from './types/config';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options;

    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/,
    // };

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

    const codeBabelLoader = buildBabelLoader({ ...options, isTSX: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTSX: true });

    return [
        fontsLoader,
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // babelLoader,
        // tsLoader,
        cssLoader,
    ];
};
