import { ReactElement } from 'react';
import { AppRoutes } from '@/shared/const/route';
import { useCurrentRoute } from '@/shared/lib/route/useCurrentRoute';
import { ScrollToolbar } from '@/widgets/ScrollToolbar';

export const useToolbarByUrl = () => {
    const currentRoute = useCurrentRoute();

    const toolbarsByRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
    };

    return toolbarsByRoute[currentRoute];
};
