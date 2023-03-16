import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/configs/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface withComponentRenderParams {
    route?: string,
    initialState?:DeepPartial<StateSchema>
}
export function withComponentRender(component: ReactNode, params: withComponentRenderParams = {}) {
    const {
        route = '/',
        initialState,
    } = params;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,
    );
}
