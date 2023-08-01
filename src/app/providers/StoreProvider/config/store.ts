import { configureStore } from '@reduxjs/toolkit';
import { CombinedState, Reducer, ReducersMapObject } from 'redux';
// eslint-disable-next-line itretiakova-plugin/public-api-imports
import { counterReducer } from '@/entities/Counter/testing';
import { userReducer } from '@/entities/User';
import { saveScrollReducer } from '@/features/SaveScroll';
import { $api } from '@/shared/api/api';
import { rtkApi } from '@/shared/api/rtkApi';
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
    preloadedState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollPosition: saveScrollReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };
    const reducerManager = createReducerManager(rootReducers);

    const thunkExtra: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: thunkExtra,
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
