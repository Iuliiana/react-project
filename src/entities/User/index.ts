export { initAuthData } from './model/services/initAuthData';

export { setJsonSettings } from './model/services/setJsonSettings';

export { useJsonSettings } from './model/selectors/getJsonSettings/getJsonSettings';

export { getUserIsInitAuth } from './model/selectors/getUserIsInitAuth/getUserIsInitAuth';

export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
    getUserRoles,
    isAdminRole,
    isManagerRole,
} from './model/selectors/getUserRoles/getUserRoles';

export { userReducer, userActions } from './model/slice/userSlice';

export type { User, UserSchema } from './model/types/UserSchema';

export { UserRole } from './model/consts/userConsts';
