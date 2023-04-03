import { RoutePath } from 'shared/configs/routerConfig/routerConfig';
import React from 'react';
import HomePageIcon from 'shared/assets/icons/home-page-icon.svg';
import AboutPageIcon from 'shared/assets/icons/about-page-icon.svg';
import ProfilePageIcon from 'shared/assets/icons/profile-page-icon.svg';
import ArticlesPageIcon from 'shared/assets/icons/article-page-icon.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;

}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: HomePageIcon,
    },
    {
        path: RoutePath.about,
        text: 'О нас',
        Icon: AboutPageIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfilePageIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: ArticlesPageIcon,
        authOnly: true,
    },
];
