import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTest from '@/shared/configs/i18n/i18nForTest';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';

export interface withComponentRenderParams {
    route?: string,
    initialState?:DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}
export function withComponentRender(component: ReactNode, params: withComponentRenderParams = {}) {
    const {
        route = '/',
        initialState,
        asyncReducers,
    } = params;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState} asyncReducers={asyncReducers}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>,
    );
}
