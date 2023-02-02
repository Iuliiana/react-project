export enum AppMode {
    PRODUCTION_MODE = 'production',
    DEVELOPMENT_MODE = 'development'
}


export type BuildMode = AppMode.PRODUCTION_MODE | AppMode.DEVELOPMENT_MODE;

export interface BuildPath {
    build: string,
    html: string,

    entry: string,

}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPath,
    isDev: boolean,
    port: number

}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}