const fsPromises = require('fs/promises');
const rootResolve = require('./helpers/rootResolve');
const createModel = require('./templates/createModel');
const createUI = require('./templates/createUI');
const createPublicAPI = require('./templates/createPublicAPI');
const toUpperFirstChar = require('./helpers/toUpperFirstChar');

module.exports = async function createTemplates(layer, sliceName) {
    try {
        await fsPromises.mkdir(rootResolve(layer, toUpperFirstChar(sliceName)));
    } catch (e) {
        console.log(`Не удалось создать директорию для слайса ${sliceName}`);
    }

    await createModel(layer, sliceName);
    await createUI(layer, sliceName);
    await createPublicAPI(layer, sliceName);
};
