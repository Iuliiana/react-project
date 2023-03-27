import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
import { LoginShema } from 'features/AuthByUsername';
import { CombinedState, ReducersMapObject } from 'redux';
import { AnyAction, EnhancedStore, Reducer } from '@reduxjs/toolkit';

export interface StateSchema {
    counter: CounterSchema,
    user: UserSchema,

    // асинхронные редьюсеры
    loginForm?: LoginShema
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
