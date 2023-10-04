import { FC, lazy } from 'react';
import { SettinsgPageProps } from './SettingsPage';

export const SettingsPageAsync = lazy<FC<SettinsgPageProps>>(
    () => import('./SettingsPage'),
);
