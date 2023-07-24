import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRoutes, RoutePath } from '@/shared/const/route';
import { AppRouteProps } from '../../../types/route';

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
