import { UserRole } from '@/entities/User';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticles,
    getRouteArticlesCreate,
    getRouteArticlesDetails,
    getRouteArticlesEdit,
    getRouteForbidden,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/route';
import { AppRouteProps } from '../../../types/route';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        element: <MainPage />,
        path: getRouteMain(),
    },
    [AppRoutes.ABOUT]: {
        element: <AboutPage />,
        path: getRouteAbout(),
    },
    [AppRoutes.PROFILE]: {
        element: <ProfilePage />,
        path: getRouteProfile(':id'),
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        element: <ArticlesPage />,
        path: getRouteArticles(),
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        element: <ArticleDetailsPage />,
        path: getRouteArticlesDetails(':id'),
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        element: <ArticleEditPage />,
        path: getRouteArticlesEdit(':id'),
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        element: <ArticleEditPage />,
        path: getRouteArticlesCreate(),
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        element: <AdminPanelPage />,
        path: getRouteAdminPanel(),
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        element: <ForbiddenPage />,
        path: getRouteForbidden(),
    },

    // last page
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: '*',
    },
};
