import { rtkApi } from '@/shared/api/rtkApi';
import { JsonSettings } from '../types/jsonSettings';
import { User } from '../types/UserSchema';

export interface SetJsonSettings {
    userId: string;
    jsonSettings: JsonSettings;
}

const userApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        setJsonSettings: build.mutation<User, SetJsonSettings>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: { jsonSettings },
            }),
        }),
        getInitAuthData: build.query<User, string>({
            query: (userId) => ({
                url: `/users/${userId}`,
                method: 'GET',
            }),
        }),
    }),
});

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate;

export const getInitAuthDataById = userApi.endpoints.getInitAuthData.initiate;
