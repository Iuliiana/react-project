import { Profile } from 'entities/Profile';

export enum ProfileErrorsCode {
    INCORRECT_USERDATA = 'INCORRECT_USERDATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    EMPTY_DATA = 'EMPTY_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface EditableProfileCardSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validationErrors?: ProfileErrorsCode[]
}
