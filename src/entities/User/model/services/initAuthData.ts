import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    LOCAL_STORAGE_STYLING_KEY,
    USER_LOCALSTORAGE_KEY,
} from '@/shared/const/localstorage';
import { getInitAuthDataById } from '../api/userApi';
import { User } from '../types/UserSchema';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'users/initAuthData',
    async (_, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

        if (!userId) {
            return rejectWithValue('error query, no user id available');
        }

        try {
            const result = await dispatch(getInitAuthDataById(userId)).unwrap();
            if (!result) {
                throw new Error('error');
            }

            localStorage.setItem(
                LOCAL_STORAGE_STYLING_KEY,
                result?.features?.isAppRedesigned ? 'new' : 'old',
            );
            return result;
        } catch (e) {
            return rejectWithValue('error query user by id');
        }
    },
);
