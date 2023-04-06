import { Currency } from 'entities/Currency/model/types/currency';
import { Country } from 'entities/Country/model/types/country';

export enum ProfileErrorsCode {
    INCORRECT_USERDATA= 'INCORRECT_USERDATA',
    INCORRECT_AGE= 'INCORRECT_AGE',
    INCORRECT_CITY= 'INCORRECT_CITY',
    INCORRECT_USERNAME= 'INCORRECT_USERNAME',
    EMPTY_DATA = 'EMPTY_DATA',
    SERVER_ERROR = 'SERVER_ERROR'
}

export interface Profile {
    id?: string,
    first?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string,
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validationErrors?: ProfileErrorsCode[]
}
