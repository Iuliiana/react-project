import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { addCommentFormReducer } from 'features/AddCommentForm';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage';
import { editableProfileCardReducer } from 'features/EditableProfileCard';
import { rtkApi } from 'shared/api/rtkApi';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slice/articlesPageSlice';

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
