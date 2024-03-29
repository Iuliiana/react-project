import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';
import { JsonSettings } from '../../types/jsonSettings';

const defaultJsonSettings: JsonSettings = {};
export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state: StateSchema) =>
        state.user?.authData?.jsonSettings ?? defaultJsonSettings,
);

// export const [useJsonSettingsByName, getJsonSettingsByName] = buildSelector(
//     (state: StateSchema, name: keyof JsonSettings) =>
//         state.user.authData?.jsonSettings?.[name],
// );
