import type {
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKey,
} from './config/StateSchema';
import { ThunkConfig } from './config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    StoreProvider,
    createReduxStore,
    StateSchemaKey,
    ReduxStoreWithManager,
};

export type { StateSchema, AppDispatch, ThunkConfig };
