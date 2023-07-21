import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import HomePageIcon from '@/shared/assets/icons/home-page-icon.svg';
import AboutPageIcon from '@/shared/assets/icons/about-page-icon.svg';
import ProfilePageIcon from '@/shared/assets/icons/profile-page-icon.svg';
import ArticlesPageIcon from '@/shared/assets/icons/article-page-icon.svg';
import { SidebarItemType } from '../types/SidebarItemsType';
import { RoutePath } from '@/shared/const/route';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: SidebarItemType[] = [
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
        ];

        if (userData) {
            SidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
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
            );
        }

        return SidebarItemsList;
    },
);
