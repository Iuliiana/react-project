import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SaveScrollSchema } from '../types/SaveScrollSchema';

const initialState: SaveScrollSchema = {
    scroll: {},
};

export const saveScrollSlice = createSlice({
    name: 'saveScroll',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{path: string, scrollPosition: number}>) => {
            state.scroll[payload.path] = payload.scrollPosition;
        },
    },
});

export const {
    actions: saveScrollActions,
    reducer: saveScrollReducer,
} = saveScrollSlice;
