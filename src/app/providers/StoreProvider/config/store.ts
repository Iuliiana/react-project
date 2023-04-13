import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { CombinedState, Reducer, ReducersMapObject } from 'redux';
import { $api } from 'shared/api/api';
import { To } from 'react-router-dom';
import { NavigateOptions } from 'react-router';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    preloadedState?:StateSchema,
    asyncReducers?:ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions)=> void,
) {
    const rootReducers:ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };
    const reducerManager = createReducerManager(rootReducers);

    const thunkExtra: ThunkExtraArg = {
        api: $api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: thunkExtra,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
