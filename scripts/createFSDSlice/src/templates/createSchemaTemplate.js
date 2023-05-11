const toUpperFirstChar = require('../helpers/toUpperFirstChar');

module.exports = function createReduxSlice(sliceName) {
    const upperFirstCharName = toUpperFirstChar(sliceName);

    return `export interface ${upperFirstCharName}Schema {
    isLoading: boolean,
    error?: string
}`;
};
