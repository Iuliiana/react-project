import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

const layers = ['app', 'entities', 'features', 'pages', 'shared', 'widgets'];
const isAbsoluteLayerImport = (src: string) =>
    layers.some((layer) => src.startsWith(layer));

files.forEach((file) => {
    const imports = file.getImportDeclarations();

    imports.forEach((importDeclaration) => {
        const src = importDeclaration.getModuleSpecifierValue();
        if (isAbsoluteLayerImport(src)) {
            importDeclaration.setModuleSpecifier(`@/${src}`);
        }
    });
});

project.save();
