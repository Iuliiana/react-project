const process = require('process');
const createTemplates = require('./src/createTemplates');

const layers = ['pages', 'features', 'entities'];
const layer = process.argv[2];
const sliceName = process.argv[3];

if (!layer || !layers.includes(layer)) {
    throw new Error(`Укажите один из слоев ${layers.join(' или ')}`);
}

if (!sliceName) {
    throw new Error('Укажите название сущности');
}

createTemplates(layer, sliceName);
