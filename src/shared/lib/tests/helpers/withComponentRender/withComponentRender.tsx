import React, { ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import i18nForTest from '@/shared/configs/i18n/i18nForTest';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line itretiakova-plugin/layer-imports
import '@/app/styles/index.scss';
// eslint-disable-next-line itretiakova-plugin/layer-imports,import/order
import { ThemeProvider } from '@/app/providers/ThemeProvider';

export interface withComponentRenderParams {
    route?: string,
    initialState?:DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme
}

interface TestProviderProps {
    children: ReactNode,
    params?: withComponentRenderParams
}

export const TestProvider = ({ children, params = {} }: TestProviderProps) => {
    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.LIGHT,
    } = params;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                <I18nextProvider i18n={i18nForTest}>
                    <ThemeProvider initialTheme={theme}>
                        <div className={`app ${theme}`}>
                            {children}
                        </div>
                    </ThemeProvider>
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
};
export function withComponentRender(component: ReactNode, params: withComponentRenderParams = {}) {
    return render(
        <TestProvider params={params}>
            {component}
        </TestProvider>,
    );
}
