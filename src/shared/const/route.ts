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
    SETTINGS = 'settings',
    // last page
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticlesDetails = (id: string) => `/articles/${id}`;
export const getRouteArticlesEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteArticlesCreate = () => '/articles/new';
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteSettings = () => '/settings';
