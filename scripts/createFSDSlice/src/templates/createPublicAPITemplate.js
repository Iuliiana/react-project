const toUpperFirstChar = require('../helpers/toUpperFirstChar');
const toLowerFirstChar = require('../helpers/toLowerFirstChar');

module.exports = function createPublicAPITemplate(sliceName, isPage) {
    const upperFirstCharName = toUpperFirstChar(sliceName);
    const lowerFirstCharName = toLowerFirstChar(sliceName);
    const comonentExport = isPage
        ? `export {
            ${upperFirstCharName}Async as ${upperFirstCharName}, 
         } from './ui/${upperFirstCharName}/${upperFirstCharName}.async';`
        : `export { ${upperFirstCharName} } from './ui/${upperFirstCharName}/${upperFirstCharName}';`;

    return `${comonentExport}
export {
  ${lowerFirstCharName}Reducer,
  ${lowerFirstCharName}Actions,
} from './model/slices/${lowerFirstCharName}Slice';

export {
    ${upperFirstCharName}Schema,
} from './model/types/${upperFirstCharName}Schema';`;
};
