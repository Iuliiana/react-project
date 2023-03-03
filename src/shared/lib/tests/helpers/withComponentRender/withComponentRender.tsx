import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import i18nForTest from 'shared/configs/i18n/i18nForTest';
import { I18nextProvider } from 'react-i18next';

export interface withComponentRenderParams {
    route?: string
}
export function withComponentRender(component: ReactNode, params: withComponentRenderParams = {}) {
    const {
        route = '/',
    } = params;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
