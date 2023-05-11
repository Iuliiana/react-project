import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './configs/build/buildWebpackConfig';
import { AppMode, BuildEnv, BuildPath } from './configs/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales'),
        favicon: path.resolve(__dirname, 'src', 'shared', 'assets', 'icons', 'favicon.svg'),
    };

    const mode = env.mode || AppMode.DEVELOPMENT_MODE;
    const isDev = mode === AppMode.DEVELOPMENT_MODE;
    const PORT = env.port || 3000;
    const apiUrl = env.apiUrl || 'http://localhost:8000';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
        project: 'frontend',
    });
};
