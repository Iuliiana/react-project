import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutPageIcon from '@/shared/assets/icons/about-page-icon.svg';
import ArticlesPageIcon from '@/shared/assets/icons/article-page-icon.svg';
import HomePageIcon from '@/shared/assets/icons/home-page-icon.svg';
import ProfilePageIcon from '@/shared/assets/icons/profile-page-icon.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/route';
import { SidebarItemType } from '../types/SidebarItemsType';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: HomePageIcon,
        },
        {
            path: getRouteAbout(),
            text: 'О нас',
            Icon: AboutPageIcon,
        },
    ];

    if (userData) {
        SidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                Icon: ProfilePageIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: ArticlesPageIcon,
                authOnly: true,
            },
        );
    }

    return SidebarItemsList;
});
