const fsPromises = require('fs/promises');
const rootResolve = require('../helpers/rootResolve');
const toUpperFirstChar = require('../helpers/toUpperFirstChar');
const createScssTemplate = require('./createScssTemplate');
const createStoriesTemplate = require('./createStoriesTemplate');
const createComponentTemplate = require('./createComponentTemplate');
const createAsyncComponentTemplate = require('./createAsyncComponentTemplate');

module.exports = async function createUI(layer, sliceName) {
    const resolveUIPath = (...segments) => rootResolve(layer, sliceName, 'ui', ...segments);
    const upperFirstCharName = toUpperFirstChar(sliceName);
    const isPage = layer === 'pages';
    const createUIStructure = async () => {
        try {
            await fsPromises.mkdir(resolveUIPath());
            await fsPromises.mkdir(resolveUIPath(`${upperFirstCharName}`));
        } catch (e) {
            console.log(`Не удалось создать ui сегмент для слайса ${sliceName}`, e);
        }
    };

    const createComponent = async () => {
        try {
            await fsPromises.writeFile(
                resolveUIPath(`${upperFirstCharName}`, `${upperFirstCharName}.tsx`),
                createComponentTemplate(sliceName, isPage),
            );
            await fsPromises.writeFile(
                resolveUIPath(`${upperFirstCharName}`, `${upperFirstCharName}.stories.tsx`),
                createStoriesTemplate(layer, sliceName, isPage),
            );
            await fsPromises.writeFile(
                resolveUIPath(`${upperFirstCharName}`, `${upperFirstCharName}.module.scss`),
                createScssTemplate(sliceName),
            );

            if (isPage) {
                await fsPromises.writeFile(
                    resolveUIPath(`${upperFirstCharName}`, `${upperFirstCharName}.async.tsx`),
                    createAsyncComponentTemplate(layer, sliceName),
                );
            }
        } catch (e) {
            console.log(`Не удалось создать react component для ${sliceName}`, e);
        }
    };

    await createUIStructure();
    await createComponent();
};
