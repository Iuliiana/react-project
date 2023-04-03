import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'articles_details',
    // last page
    NOT_FOUND = 'not_found'
}

export type AppRoutePrups = RouteProps & {
    authOnly?: boolean,
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles', // + :id

    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutePrups> = {
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
        path: RoutePath[AppRoutes.PROFILE],
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        element: <ArticlesPage />,
        path: RoutePath[AppRoutes.ARTICLES],
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        element: <ArticleDetailsPage />,
        path: `${RoutePath[AppRoutes.ARTICLE_DETAILS]}/:id`,
        authOnly: true,
    },

    // last page
    [AppRoutes.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePath[AppRoutes.NOT_FOUND],
    },
};
