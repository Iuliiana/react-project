import { ArticleViewType } from 'entities/Article';
import ViewGridIcon from 'shared/assets/icons/view_grid.svg';
import ViewListIcon from 'shared/assets/icons/view_list.svg';
import React from 'react';

interface ArticleViewButton {
    view: ArticleViewType,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const articleViewButtons: ArticleViewButton[] = [
    {
        view: ArticleViewType.GRID,
        Icon: ViewGridIcon,
    },
    {
        view: ArticleViewType.LIST,
        Icon: ViewListIcon,
    },
];
