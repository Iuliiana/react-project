import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    LOCAL_STORAGE_STYLING_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';
import { setFeaturesFlags } from '@/shared/lib/features';
import { initAuthData } from '../services/initAuthData';
import { setJsonSettings } from '../services/setJsonSettings';
import { User, UserSchema } from '../types/UserSchema';

const initialState: UserSchema = { _isInitAuth: false };

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeaturesFlags(action.payload.features);
            localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
            localStorage.setItem(
                LOCAL_STORAGE_STYLING_KEY,
                action.payload?.features?.isAppRedesigned ? 'new' : 'old',
            );
        },
        logoutUser: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(setJsonSettings.fulfilled, (state, { payload }) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload;
                }
            })
            .addCase(initAuthData.fulfilled, (state, { payload }) => {
                state.authData = payload;
                setFeaturesFlags(payload.features);
                state._isInitAuth = true;
            })
            .addCase(initAuthData.rejected, (state) => {
                state._isInitAuth = true;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
