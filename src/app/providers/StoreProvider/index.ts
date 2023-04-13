import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type { StateSchema, ReduxStoreWithManager, StateSchemaKey } from './config/StateSchema';
import { ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    StateSchemaKey,
    ReduxStoreWithManager,
    AppDispatch,
    ThunkConfig,
};
