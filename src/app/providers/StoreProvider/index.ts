import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type { StateSchema, ReduxStoreWithManager, StateSchemaKey } from './config/StateSchema';
import { ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchemaKey,
    ReduxStoreWithManager,
};

export type{
    StateSchema,
    AppDispatch,
    ThunkConfig,
};
