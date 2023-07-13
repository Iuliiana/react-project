import { RouteProps } from 'react-router';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { UserRole } from '@/entities/User';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articles_details',
    ARTICLE_EDIT = 'articles_edit',
    ARTICLE_CREATE = 'articles_create',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    // last page
    NOT_FOUND = 'not_found'
}

export type AppRouteProps = RouteProps & {
    authOnly?: boolean,
    roles?: UserRole[]
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/', // + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles/', // + :id
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN]: '/forbidden',

    // last page
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: RoutePath[AppRoutes.MAIN],
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: RoutePath[AppRoutes.ABOUT],
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: `${RoutePath[AppRoutes.PROFILE]}:id`,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        element: <ArticlesPage />,
        path: RoutePath[AppRoutes.ARTICLES],
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        element: <ArticleDetailsPage />,
        path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}:id`,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        element: <ArticleEditPage />,
        path: `${RoutePath[AppRoutes.ARTICLE_EDIT]}`,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        element: <ArticleEditPage />,
        path: `${RoutePath[AppRoutes.ARTICLE_CREATE]}`,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        element: <AdminPanelPage />,
        path: `${RoutePath[AppRoutes.ADMIN_PANEL]}`,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        element: <ForbiddenPage />,
        path: `${RoutePath[AppRoutes.FORBIDDEN]}`,
    },

    // last page
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePath[AppRoutes.NOT_FOUND],
    },
};
