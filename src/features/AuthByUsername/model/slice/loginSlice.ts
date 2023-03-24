import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginShema } from '../types/LoginShema';
import { loginByUserName } from '../services/loginByUserName/loginByUserName';

const initialState: LoginShema = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action:PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action:PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUserName.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(loginByUserName.fulfilled, (state) => {
                state.isLoading = false;
                state.error = undefined;
                state.username = '';
                state.password = '';
            })
            .addCase(loginByUserName.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            });
    },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
