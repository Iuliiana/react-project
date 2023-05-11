import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers({
    comments: articleDetailsCommentsReducer,
});
