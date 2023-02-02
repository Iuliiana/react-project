import path from "path";
import webpack from "webpack";
import {buildWebpackConfig} from "./configs/buildWebpackConfig";
import {AppMode, BuildEnv, BuildPath} from "./configs/types/config";

export default (env: BuildEnv): webpack.Configuration => {

    const paths: BuildPath = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }

    const mode = env.mode || AppMode.DEVELOPMENT_MODE;
    const isDev = mode === AppMode.DEVELOPMENT_MODE;
    const PORT = env.port || 3000;

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config;
};
