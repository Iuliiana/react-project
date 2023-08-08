import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeaturesFlags } from '@/shared/lib/features';
import { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = { _isInitAuth: false };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeaturesFlags(action.payload.features);
        },
        logoutUser: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
        initAuthData: (state) => {
            const userData = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (userData) {
                const user = JSON.parse(userData);
                state.authData = user;
                setFeaturesFlags(user.features);
            }
            state._isInitAuth = true;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
