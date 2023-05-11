const fsPromises = require('fs/promises');
const rootResolve = require('../helpers/rootResolve');
const createReduxSliceTemplate = require('./createReduxSliceTemplate');
const createSchemaTemplate = require('./createSchemaTemplate');
const toLowerFirstChar = require('../helpers/toLowerFirstChar');
const toUpperFirstChar = require('../helpers/toUpperFirstChar');

module.exports = async function createModel(layer, sliceName) {
    const resolveModelPath = (...segments) => rootResolve(layer, sliceName, 'model', ...segments);
    const lowerFirstCharName = toLowerFirstChar(sliceName);
    const upperFirstCharName = toUpperFirstChar(sliceName);
    const createModelStructure = async () => {
        try {
            await fsPromises.mkdir(resolveModelPath());
            await fsPromises.mkdir(resolveModelPath('slices'));
            await fsPromises.mkdir(resolveModelPath('types'));
            await fsPromises.mkdir(resolveModelPath('selectors'));
            await fsPromises.mkdir(resolveModelPath('services'));
        } catch (e) {
            console.log(`Не удалось создать model сегмент для слайса ${sliceName}`, e);
        }
    };

    const createReduxSlice = async () => {
        try {
            await fsPromises.writeFile(
                resolveModelPath('slices', `${lowerFirstCharName}Slice.ts`),
                createReduxSliceTemplate(sliceName),
            );
        } catch (e) {
            console.log(`Не удалось создать redux slice для ${sliceName}`, e);
        }
    };

    const createSchemaType = async () => {
        try {
            await fsPromises.writeFile(
                resolveModelPath('types', `${upperFirstCharName}Schema.ts`),
                createSchemaTemplate(sliceName),
            );
        } catch (e) {
            console.log(`Не удалось создать schema для ${sliceName}`, e);
        }
    };

    await createModelStructure();
    await createReduxSlice();
    await createSchemaType();
};
