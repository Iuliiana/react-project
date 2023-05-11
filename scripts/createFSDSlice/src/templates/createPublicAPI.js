const fsPromises = require('fs/promises');
const rootResolve = require('../helpers/rootResolve');
const createPublicAPITemplate = require('./createPublicAPITemplate');

module.exports = async function createPublicAPI(layer, sliceName) {
    const resolveIndexPath = (...segments) => rootResolve(layer, sliceName, ...segments);
    const isPage = layer === 'pages';

    const createIndexFile = async () => {
        try {
            await fsPromises.writeFile(
                resolveIndexPath('index.ts'),
                createPublicAPITemplate(sliceName, isPage),
            );
        } catch (e) {
            console.log(`Не удалось создать public API для ${sliceName}`, e);
        }
    };

    await createIndexFile();
};
