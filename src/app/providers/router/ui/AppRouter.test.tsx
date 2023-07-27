import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';
import { getRouteAdminPanel, getRouteArticles, getRouteMain } from '@/shared/const/route';
import { withComponentRender } from '@/shared/lib/tests/helpers/withComponentRender/withComponentRender';
import AppRouter from './AppRouter';

describe('AppRouter tests', () => {
    test('render MainPage', async () => {
        withComponentRender(<AppRouter />, {
            route: getRouteMain(),
        });
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('render not found page(NotFoundPage)', async () => {
        withComponentRender(<AppRouter />, {
            route: '/trhvtbtyb',
        });
        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });

    test('render ArticlesPage (no auth user)', async () => {
        withComponentRender(<AppRouter />, {
            route: getRouteArticles(),
        });
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });

    test('render auth and no access(ForbiddenPage)', async () => {
        withComponentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _isInitAuth: true,
                    authData: {},
                },
            },
        });
        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('render auth and access(AdminPanelPage)', async () => {
        withComponentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _isInitAuth: true,
                    authData: {
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });
        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
