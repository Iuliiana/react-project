import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/ProfileSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { putProfileData } from '../services/putProfileData/putProfileData';

const initialState: ProfileSchema = {
    data: undefined,
    form: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
    validationErrors: undefined,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly: (state, action:PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        setFormData: (state, action:PayloadAction<Profile>) => {
            state.form = { ...state.form, ...action.payload };
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validationErrors = undefined;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.error = undefined;
                state.data = payload;
                state.form = payload;
            })
            .addCase(fetchProfileData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            })
            .addCase(putProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
                state.validationErrors = undefined;
            })
            .addCase(putProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validationErrors = undefined;
            })
            .addCase(putProfileData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.validationErrors = payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
