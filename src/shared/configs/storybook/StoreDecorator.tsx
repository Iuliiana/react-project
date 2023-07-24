import { Story } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { addCommentFormReducer } from '@/features/AddCommentForm/testing';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
import { editableProfileCardReducer } from '@/features/EditableProfileCard/testing';
import { rtkApi } from '@/shared/api/rtkApi';
import { articleDetailsReducer } from '@/entities/Article/testing';
import { articlesPageReducer } from '@/pages/ArticlesPage/testing';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    editableProfileCard: editableProfileCardReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articlesPage: articlesPageReducer,
    articleDetailsPage: articleDetailsPageReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
};
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
