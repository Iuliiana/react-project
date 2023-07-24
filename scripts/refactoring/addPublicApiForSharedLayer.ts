import { Project } from 'ts-morph';
import path from 'path';

/*
* пройтись по всем файлам в shared
* добавить паблик апи, если его нет
* пройтись про файлам проекта и поправить импорт
*
* */

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
const pathBySharedUi = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');

const isAbsoluteLayerImport = (src: string) => layers.some((layer) => src.startsWith(layer));
const sharedUiDirectory = project.getDirectory(pathBySharedUi);
const sharedUiDirectories = sharedUiDirectory?.getDirectories();

sharedUiDirectories?.forEach((directory) => {
    const indexFilePath = path.resolve(pathBySharedUi, directory.getBaseName(), 'index.ts');

    if (!project.getSourceFile(indexFilePath)) {
        const indexTemplate = `export * from './${directory.getBaseName()}';`;
        const sourceFile = directory.createSourceFile(indexFilePath, indexTemplate, { overwrite: true });
        sourceFile.save();
    }
});

files.forEach((file) => {
    const imports = file.getImportDeclarations();

    imports.forEach((importDeclaration) => {
        const src = importDeclaration.getModuleSpecifierValue();
        const clearPath = src.replace('@/', '');

        const segments = clearPath.split('/');

        if (isAbsoluteLayerImport(clearPath) && segments?.[0] === 'shared' && segments?.[1] === 'ui') {
            const result = segments.slice(0, 3).join('/');
            importDeclaration.setModuleSpecifier(`@/${result}`);
        }
    });
});

project.save();
