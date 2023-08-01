import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

export const getSaveScroll = (state: StateSchema) =>
    state.scrollPosition.scroll;

// https://redux.js.org/usage/deriving-data-selectors#createselector-behavior
// const selectItems = state => state.items
// const selectItemId = (state, itemId) => itemId
//
// const selectItemById = createSelector(
//     [selectItems, selectItemId],
//     (items, itemId) => items[itemId]
// )
//
// const item = selectItemById(state, 42)
export const getSaveScrollByPath = createSelector(
    getSaveScroll,
    (state: StateSchema, path: string) => path,
    (scroll, path) => scroll[path] || 0,
);
