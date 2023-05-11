const toUpperFirstChar = require('../helpers/toUpperFirstChar');

module.exports = function createAsyncComponentTemplate(layer, sliceName) {
    const upperFirstCharName = toUpperFirstChar(sliceName);

    return `import React from 'react';

export const ${upperFirstCharName}Async = React.lazy(() => import('./${upperFirstCharName}'));
`;
};
