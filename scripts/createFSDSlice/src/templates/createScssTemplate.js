const toUpperFirstChar = require('../helpers/toUpperFirstChar');

module.exports = function createScssTemplate(sliceName) {
    const upperFirstCharName = toUpperFirstChar(sliceName);

    return `.${upperFirstCharName} {}`;
};
