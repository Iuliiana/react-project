import { CombinedState, ReducersMapObject } from 'redux';
import { AnyAction, EnhancedStore, Reducer } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { LoginShema } from '@/features/AuthByUsername';
import { ArticleDetailsSchema } from '@/entities/Article';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { AddCommentFormSchema } from '@/features/AddCommentForm';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { SaveScrollSchema } from '@/features/SaveScroll';
import { rtkApi } from '@/shared/api/rtkApi';
import { EditableProfileCardSchema } from '@/features/EditableProfileCard';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,
    scrollPosition: SaveScrollSchema,

    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // асинхронные редьюсеры
    loginForm?: LoginShema,
    editableProfileCard?: EditableProfileCardSchema,
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
