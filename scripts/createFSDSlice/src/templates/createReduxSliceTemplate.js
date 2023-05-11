const toUpperFirstChar = require('../helpers/toUpperFirstChar');
const toLowerFirstChar = require('../helpers/toLowerFirstChar');

module.exports = function createReduxSlice(sliceName) {
    const upperFirstCharName = toUpperFirstChar(sliceName);
    const lowerFirstCharName = toLowerFirstChar(sliceName);

    return `import { createSlice } from '@reduxjs/toolkit';
import { ${upperFirstCharName}Schema } from '../types/${upperFirstCharName}Schema';

const initialState: ${upperFirstCharName}Schema = {
    isLoading: false,
    error: '',
};

export const ${lowerFirstCharName}Slice = createSlice({
    name: '${lowerFirstCharName}',
    initialState,
    reducers: {},
//  extraReducers: (builder) => {
//     builder
//         .addCase(fetchData.pending, (state) => {
//             state.isLoading = true;
//             state.error = undefined;
//         })
//         .addCase(fetchData.fulfilled, (state, { payload }) => {
//             state.isLoading = false;
//             state.error = undefined;
//             state.data = payload;
//         })
//         .addCase(fetchData.rejected, (state, { payload }) => {
//             state.isLoading = false;
//             state.error = payload;
//         });
// },
});

export const { actions: ${lowerFirstCharName}Actions } = ${lowerFirstCharName}Slice;
export const { reducer: ${lowerFirstCharName}Reducer } = ${lowerFirstCharName}Slice;`;
};
