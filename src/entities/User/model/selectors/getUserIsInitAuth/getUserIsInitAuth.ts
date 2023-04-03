import { StateSchema } from 'app/providers/StoreProvider';

export const getUserIsInitAuth = (state: StateSchema) => state.user._isInitAuth;
