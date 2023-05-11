import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginShema } from 'features/AuthByUsername';
import { CombinedState, ReducersMapObject } from 'redux';
import { AnyAction, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage/model/types/ArticlesPageSchema';
import { SaveScrollSchema } from 'features/SaveScroll';
import { rtkApi } from 'shared/api/rtkApi';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scrollPosition: SaveScrollSchema,

    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // асинхронные редьюсеры
    loginForm?: LoginShema,
    profile?: ProfileSchema,
    articleDetails?: ArticleDetailsSchema,
    articleDetailsPage?: ArticleDetailsPageSchema,
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
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema,
}
