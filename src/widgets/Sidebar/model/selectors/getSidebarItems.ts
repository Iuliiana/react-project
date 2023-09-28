import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import AboutPageIconDeprecated from '@/shared/assets/icons/about-page-icon.svg';
import ArticlesPageIconDeprecated from '@/shared/assets/icons/article-page-icon.svg';
import HomePageIconDeprecated from '@/shared/assets/icons/home-page-icon.svg';
import ProfilePageIcon from '@/shared/assets/icons/new/Avatar.svg';
import ArticlesPageIcon from '@/shared/assets/icons/new/Doc.svg';
import HomePageIcon from '@/shared/assets/icons/new/Home.svg';
import AboutPageIcon from '@/shared/assets/icons/new/Info.svg';
import ProfilePageIconDeprecated from '@/shared/assets/icons/profile-page-icon.svg';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/route';
import { toggleFeatureFlag } from '@/shared/lib/features';
import { SidebarItemType } from '../types/SidebarItemsType';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: toggleFeatureFlag({
                name: 'isAppRedesigned',
                off: () => HomePageIconDeprecated,
                on: () => HomePageIcon,
            }),
        },
        {
            path: getRouteAbout(),
            text: 'О нас',
            Icon: toggleFeatureFlag({
                name: 'isAppRedesigned',
                off: () => AboutPageIconDeprecated,
                on: () => AboutPageIcon,
            }),
        },
    ];

    if (userData) {
        SidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                text: 'Профиль',
                Icon: toggleFeatureFlag({
                    name: 'isAppRedesigned',
                    off: () => ProfilePageIconDeprecated,
                    on: () => ProfilePageIcon,
                }),
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: toggleFeatureFlag({
                    name: 'isAppRedesigned',
                    off: () => ArticlesPageIconDeprecated,
                    on: () => ArticlesPageIcon,
                }),
                authOnly: true,
            },
        );
    }

    return SidebarItemsList;
});
