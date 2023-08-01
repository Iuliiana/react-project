import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { EditableProfileCardSchema } from '../types/EditableProfileCardSchema';

const initialState: EditableProfileCardSchema = {
    data: undefined,
    form: undefined,
    isLoading: false,
    error: undefined,
    readonly: true,
    validationErrors: undefined,
};

export const editableProfileCardSlice = createSlice({
    name: 'editableProfileCard',
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        setFormData: (state, action: PayloadAction<Profile>) => {
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
            .addCase(updateProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
                state.validationErrors = undefined;
            })
            .addCase(updateProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validationErrors = undefined;
            })
            .addCase(updateProfileData.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.validationErrors = payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: editableProfileCardActions } = editableProfileCardSlice;
export const { reducer: editableProfileCardReducer } = editableProfileCardSlice;
