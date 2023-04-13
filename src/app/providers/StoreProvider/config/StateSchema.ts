import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginShema } from 'features/AuthByUsername';
import { CombinedState, ReducersMapObject } from 'redux';
import { AnyAction, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsCommentsSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/ArticlesPageSchema';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // асинхронные редьюсеры
    loginForm?: LoginShema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    articleDetailsComments?: ArticleDetailsCommentsSchema,
    addCommentForm?: AddCommentFormSchema,
    articlesPage?: ArticlesPageSchema

}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap:() => ReducersMapObject<StateSchema>,
    reduce:(state:StateSchema, action:AnyAction) => CombinedState<StateSchema>,
    add: (key: StateSchemaKey, reducer: Reducer) => void
    remove:(key: StateSchemaKey) => void

}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema>{
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance,
    navigate?: (to: To, options?: NavigateOptions)=> void;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema,
}
