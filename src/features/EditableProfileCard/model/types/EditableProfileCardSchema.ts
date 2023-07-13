import { Profile } from '@/entities/Profile';
import { ProfileErrorsCode } from '../consts/profileErrorsCodeConsts';

export interface EditableProfileCardSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validationErrors?: ProfileErrorsCode[]
}
